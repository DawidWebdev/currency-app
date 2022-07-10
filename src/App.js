import React, {useState, useEffect} from 'react';
import './App.css';
import { CurrencyList } from './Components/CurrencyList';
import { FavCurrencyList } from './Components/FavCurrencyList';

const App = () => {
  const[currencyData, setCurrencyData] = useState([{}]);
  const[currencyList, setCurrencyList] = useState([]);

  useEffect(()=>{
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/').then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setCurrencyList(data[0].rates);
      }
    )
  }, [])

  return (
    <main>
      <div className='currency-list'>
        <h1>Currency List</h1>
        <CurrencyList currencyList={currencyList}/>
      </div>

      <div className='fav-currency-list'>
        <h1>Favourites List</h1>
        <FavCurrencyList/>
      </div>
    </main>
  );
}

export default App;
