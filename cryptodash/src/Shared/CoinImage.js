import React from 'react';
import styled, { css } from 'styled-components';

const CoinImages = styled.img`
  height: 50px;
  ${props => props.spotlight && css`
    margin: auto;
    height: 200px;
    display: block;
  `}
`;

const CoinImage = ({coin, spotlight, style}) => {
  return <CoinImages
    alt={coin.CoinSymbol}
    spotlight={spotlight}
    src={`http://cryptocompare.com/${
      coin.ImageUrl
    }`}
  />;
}

export default CoinImage;
