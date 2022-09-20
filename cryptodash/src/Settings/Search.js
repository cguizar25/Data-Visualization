import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from "../App/AppProvider";
import _ from 'lodash';

const SearchGrid = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1p solid;
  height 25px;
  color: #1163c9;
  place-self: center left
  display: grid;
  grid-template-columns: 200px 1fr;
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy.filter(inputValue, allStringsToSearch, {})
    .filter(inputValue, allStringsToSearch, {})
    .map(result = result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
  })
  setFilteredCoins(filteredCoins);
}, 500)

function filterCoins(e, setFilteredCoins, coinList){
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins)
}

const Search = () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) =>
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
      }
    </AppContext.Consumer>
  )
}
export default Search;
