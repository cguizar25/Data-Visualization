import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { AppContext } from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right;
`

const JustifyLeft = styled.div`
  justify-self: left;
`

const TicketPrice = styled.div`
  ${fontSizeBig}
`

const ChangePct = styled.div`
  color: green;
  ${props => props.red && css`
    color: red;
  `}
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    ${fontSize3};
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: right;
  `}

  ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none;
  `}
`

const ChangePercent = ({data}) => {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
}

const PriceTiles = ({sym, data, currentFavorite, setCurrentFavorite}) => {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <ChangePercent data={data}/>
      </CoinHeaderGridStyled>
      <TicketPrice>
        ${numberFormat(data.PRICE)}
      </TicketPrice>
    </PriceTileStyled>
  )
}

const PriceTileCompact = ({sym, data, currentFavorite, setCurrentFavorite}) => {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
        <JustifyLeft> {sym} </JustifyLeft>
        <ChangePercent data={data}/>
      <TicketPrice>
        ${numberFormat(data.PRICE)}
      </TicketPrice>
    </PriceTileStyled>
  );
}

const PriceTile = ({price, index}) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTiles : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({currentFavorite, setCurrentFavorite}) =>
        <TileClass
          sym={sym}
          data={data}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        >
        </TileClass>
      }
    </AppContext.Consumer>
  )
}

export default PriceTile;
