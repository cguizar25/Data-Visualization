import React from "react";
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile'

const PriceGrids = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`
const PriceGrid = () => {
  return (
    <AppContext.Consumer>
      {({prices}) => (
        <PriceGrids>
          {prices.map((price, index) =>
            <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
          )}
        </PriceGrids>
      )}
    </AppContext.Consumer>
  )
}

export default PriceGrid;
