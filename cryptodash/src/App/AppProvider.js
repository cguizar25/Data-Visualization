import React from 'react';
import _ from 'lodash'
import moment from 'moment';
const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'dashboard',
      favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorite: this.isInFavorite,
      confirmFavorites: this.confirmFavorites,
      setCurrentFavorite: this.currentFavorites,
      setFilteredCoins: this.setFilteredCoins
    }
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    }
  }

  removeCoin = key => {
    let favorites = [...this.state,favorites];
    this.setState({favorites: _.pull(favorites, key)})
  }

  isInFavorite = key => _.includes(this.state.favorites, key)

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();

  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }


  fetchPrices = async () => {
  if(this.state.firstVisit) return;
  let prices = await this.prices();
  this.setState({prices});
  }

  fetchHistorical = async () => {
    if(this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment().subtract({months: TIME_UNITS - index}).valueOf(),
          ticker.USD
        ])
      }
    ]
    this.setSttate({historical});
  }

  prices = async () => {
    let returnData = [];
    for (let i = 0; i< this.state.favorites.length; i++){
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Fetch price error:', e)
      }
    }
  }

  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--){
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
          .subtract({months: units})
          .toDate()
        )
      )
    }
    return Promise.all(promises)
  }

  confirmFavorites = () => {
    let currentFavorites = this.state.favorites[0];
    this.setState({
      firstVisit:false,
      page: 'dashboard',
      currentFavorites,
      prices: null,
      historical: null
    }, () => {
      this.fetchPrices();
      this.fetchHistorical();
    }
  );
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
      currentFavorites
    }));
  }

  setCurrentFavorite = (sym) => {
    this.setState({
      currentFavorites: sym,
      historical: null
    }, this.fetchHistorical);

    localStorage.setItem('cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')),
      currentFavorites: sym
    }))
  }

  savedSettings(){
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData){
      return {page: 'settings', firstVisit: true}
    }
    let {favorites, currentFavorites} = cryptoDashData;
    return {favorites, currentFavorites};
  }


  setPage = (page) => {this.setState({page})};

  setFilteredCoins = (filteredCoins) => {this.setState({filteredCoins})};


  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
