import React from 'react';
import styled, { css } from 'styled-components';

export const CoinImage = styled.img`
  height: 50px;
  ${props => props.spotlight && css`
    margin: auto;
    height: 200px;
  `}
`;

const image = ({coin, style}) => {
  return <img
    spotlight={spotlight}
    alt={coin.CoinSymbol}
    src={`http://cryptocompare.com/${
      coin.ImageUrl
    }`}
  />;
}

export default image;
