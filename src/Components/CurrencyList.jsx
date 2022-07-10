import React from 'react'
import { Currency } from '../Components/Currency';

export const CurrencyList = ({currencyList, addCurrency}) => {
  return (
    <ul className="currency-list-ul">
        {currencyList.map((currency)=>{
            return(
                <Currency key={currency.mid} currencystate={currency} currencyname={currency.currency} currencycode={currency.code} currencymid={currency.mid} currencyplus={true} addCurrency={addCurrency}/>
            )
        })}
    </ul>
  )
}