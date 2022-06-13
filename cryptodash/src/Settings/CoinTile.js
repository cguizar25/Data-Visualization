import { AppContext } from '../App/AppProvider';
import {SelectableTile, DisabledTile, DeletableTile} from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey)
  }
}

const CoinKey = ({coinKey, topSection}) => {
  return <AppContext.Consumer>
    {({coinList, addCoin, removeCoin, isInFavorite}) => {
      let coin = coinList[coinKey];

      let TileClass = SelectableTile;
      if(topSection){
        TileClass = DeletableTile;
      }else if (isInFavorite(coinKey)){
        TileClass = DisabledTile;
      }

      return <TileClass
        onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
      >
        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
        <CoinImage coin={coin}/>
      </TileClass>
    }}

  </AppContext.Consumer>
}

export default CoinKey;
