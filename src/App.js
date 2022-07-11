import React, {useState, useEffect} from 'react';
import './App.css';
import { CurrencyList } from './Components/CurrencyList';
import { FavCurrencyList } from './Components/FavCurrencyList';
import { Popup } from './Components/Popup';

const App = () => {
  const[currencyData, setCurrencyData] = useState([{}]);
  const[currencyList, setCurrencyList] = useState([]);
  const[favList, setFavList] = useState([]);
  const[input, setInput] = useState("");

    const addCurrency = (currency) =>{
      if(!favList.find(curr => curr.currencyname === currency.currency))
      {
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
      }

    const removeCurrency = (currency) =>{
      if(favList.indexOf(currency.currency > -1))
      {
        console.log('jest')
      }
      else{
        console.log('nie ma')
      }
    let newCurrency = favList.filter((checkcurrency) => checkcurrency.id !== currency.id);
    setFavList(newCurrency);
  }

  useEffect(()=>{
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/').then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setCurrencyData(data);
        setCurrencyList(data[0].rates);
      }
    )
  }, [])

  return (
    <main>
      <div className='currencies-lists'>
        <div className='currency-list list'>
          <h1>Currency List</h1>
          <CurrencyList currencyList={currencyList} addCurrency={addCurrency} input={input}/>
        </div>

        <div className='fav-currency-list list'>
          <h1>Favourites</h1>
          <FavCurrencyList favList={favList} removeCurrency={removeCurrency}/>
          <p className='currency-length'>{favList.length} currencies added</p>
          <button className='remove-fav-button' onClick={()=>{
            setFavList([]);
          }}>Clear all</button>
        </div>
      </div>
    </main>
  );
}

export default App;
