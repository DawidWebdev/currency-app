import React, {useState} from 'react'
import { Currency } from '../Components/Currency';

export const FavCurrencyList = ({favList, removeCurrency}) => {
  return (
    <ul className="fav-currency-list-ul">
        {favList.map((fav)=>{
            return(
                <Currency key={fav.id} id={fav.id} currencystate={fav} currencyname={fav.currencyname} currencycode={fav.currencycode} currencymid={fav.currencymid} currencyplus={false} removeCurrency={removeCurrency}/>
            )
        })}
    </ul>
  )
}