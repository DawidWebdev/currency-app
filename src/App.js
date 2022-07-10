import React, {useState, useEffect} from 'react';
import './App.css';
import { CurrencyList } from './Components/CurrencyList';
import { FavCurrencyList } from './Components/FavCurrencyList';

const App = () => {
  const[currencyData, setCurrencyData] = useState([{}]);
  const[currencyList, setCurrencyList] = useState([]);
  const[favList, setFavList] = useState([]);

    const addCurrency = (currency) =>{
        let id = 1;
          if(favList.length > 0 )
          {
            id = favList[0].id + 1;
          }
        let newCurrency = {
          id: id,
          currencycode: currency.code,
          currencyname: currency.currency,
          currencymid: currency.mid,
        };
        let newCurrencies = [newCurrency, ...favList];
        setFavList(newCurrencies);
      }

    const removeCurrency = (currency) =>{
    let newCurrency = favList.filter((checkcurrency) => checkcurrency.id !== currency.id);
    setFavList(newCurrency);
  }

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
        <CurrencyList currencyList={currencyList} addCurrency={addCurrency}/>
      </div>

      <div className='fav-currency-list'>
        <h1>Favourites List</h1>
        <FavCurrencyList favList={favList} removeCurrency={removeCurrency}/>
      </div>
    </main>
  );
}

export default App;
