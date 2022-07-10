import React from 'react'
import { Currency } from '../Components/Currency';

export const CurrencyList = ({currencyList}) => {
  return (
    <ul className="currency-list-ul">
        {currencyList.map((currency)=>{
            return(
                <Currency key={currency.mid} currencyname={currency.currency} currencycode={currency.code} currencymid={currency.mid}/>
            )
        })}
    </ul>
  )
}