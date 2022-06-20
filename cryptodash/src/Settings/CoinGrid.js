import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`

function getLowerSectionCoins(filteredCoins){
  return (filteredCoins && Object.keys(filteredCoins)) ||
  Object.keys(coinList).slice(0, 100)
}

const getCoinsToDisplay = (coinList, topSection, favorites, filterCoins) => {
  return topSection ? favorites : getLowerSectionCoins(filterCoins);
};

export default function ({topSection}){
  return <AppContext.Consumer>
    {({coinList, favorites}) => <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey =>
        <CoinTile topSection={topSection} coinKey={coinKey}/>
      )}
    </CoinGridStyled>}
  </AppContext.Consumer>
}
