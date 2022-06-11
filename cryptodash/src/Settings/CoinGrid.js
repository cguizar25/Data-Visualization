import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`

const getCoinsToDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? : 100);
};

export default function ({topSection}){
  return <AppContext.Consumer>
    {({coinList}) => <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection).map(coinKey =>
        <CoinTile topSection={topSection} coinKey={coinKey}/>
      )}
    </CoinGridStyled>}
  </AppContext.Consumer>
}
