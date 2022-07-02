import React from 'react';
import styled, { css } from 'styled-components';

const CoinImage = styled.img`
  height: 50px;
  ${props => props.spotlight && css`
    margin: auto;
    height: 200px;
  `}
`_

export default function ({coin, style}) {
  return <img
    spotlight={spotlight}
    alt={coin.CoinSymbol}
    src={`http://cryptocompare.com/${
      coin.ImageUrl
    }`}
  />;
}
