import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGridStyled';
import { AppContext } from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right;
`

const JustifyLeft = styled.div`
  justify-self: left;
`

const TicketPrice = styled.div`
  ${fontSizeBig};
`

const ChangePct = styled.div`
  color: green;
  ${props => props.red && css`
    color: red
  `}
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    ${fontSize3}
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: right;
  `}

  ${props => props.currentFavorites && css`
    ${greenBoxShadow}
    pointer-events: none;
  `}
`

const ChangePercent = ({data}) => {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  )
}

const PriceTiles = ({sym, data, currentFavorites, setCurrentFavorite}) => {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorites={currentFavorites}>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TicketPrice>
        ${numberFormat(data.Price)}
      </TicketPrice>
    </PriceTileStyled>
  );
}

const PriceTileCompact = ({sym, data, currentFavorites, setCurrentFavorite}) => {
  <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorites={currentFavorites}>
    <JustifyLeft>
      {sym}
    </JustifyLeft>
    <ChangePercent data={data} />
    <div>
      ${numberFormat(data.Price)}
    </div>
  </PriceTileStyled>
}

const PriceTile = ({price, index}) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTiles: PriceTileCompact;
  return (
    <AppContext.Provider>
      {({currentFavorites, setCurrentFavorite}) =>
        <TileClass
          sym={sym}
          data={data}
          sym={sym}
          currentFavorites={currentFavorites === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        >
         </TileClass>

    }
    </AppContext.Provider>
  )
}

export default PriceTile;
