import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3 } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGridStyled';

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}_

const PriceTileStyled = syled(SelectableTile)`
  ${props => props.compact && css`
    ${fontSize3}
  `}
`_

function PriceTile({sym, data}) {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <div> {numberFormat(data.CHANGEPCT24HOUR)} </div>
      </CoinHeaderGridStyled>
    </PriceTileStyled>
  )
}

export default function({price, index}){
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  return <PriceTile sym={sym} data={data.PRICE}> {sym} {data.PRICE} </PriceTile>
}
