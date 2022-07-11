import React, {useEffect, useState} from 'react'
import { Currency } from '../Components/Currency';

export const CurrencyList = ({currencyList, addCurrency, input, currencyData}) => {
  const[filteredList, setFilteredList] = useState(currencyList);

  useEffect(()=>{
    if(input.length > 0){
      setFilteredList(currencyList.filter(curr => curr.currency.toLowerCase().includes(input.toLowerCase())));
    }
    else{
      setFilteredList(currencyList);
    }
  }, [input])

  return (
    <ul className="currency-list-ul">
        {filteredList.map((currency)=>{
            return(
                <Currency key={currency.mid} currencystate={currency} currencyname={currency.currency} currencycode={currency.code} currencymid={currency.mid} currencyplus={true} addCurrency={addCurrency}/>
            )
        })}
    </ul>
  )
}