import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGridStyled';

const JustifyRight = styled.div`
  justify-self: right;
`

const JustifyLeft = styled.div`
  justify-self: left;
`

const TicketPrice = styled.div`
  ${fontSizeBigs};
`

const ChangePct = styled.div`
  color: green;
  ${props => props.red && css`
    color: red
  `}
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}_

const PriceTileStyled = syled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    ${fontSize3}
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: right;
  `}
`_

function ChangePercent({data}){
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  )
}

function PriceTile({sym, data}) {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TicketPrice
        ${numberFormat(data.Price)}
      </TicketPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({sym, data}) {
  <PriceTileStyled compact>
    <JustifyLeft>
      {sym}
    </JustifyLeft>
    <ChangePercent data={data} />
    <div>
      ${numberFormat(data.Price)}
    </div>
  </PriceTileStyled>
}

export default function({price, index}){
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile: PriceTileCompact;
  return <TileClass sym={sym} data={data.PRICE}> {sym} {data.PRICE} </TileClass>
}
