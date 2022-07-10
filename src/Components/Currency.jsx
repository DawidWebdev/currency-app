import React from 'react'

export const Currency = ({ currencystate, id, currencyname, currencycode, currencymid, currencyplus, addCurrency, removeCurrency }) => {
  return (
    <div className='currency'>
        <div className="currency-name">{currencyname}</div>
        <div className="currency-code">{currencycode}</div>
        <div className="currency-mid">{currencymid}</div>
        {id}
        {currencyplus && <button className='currency-plus' onClick={()=>{
            addCurrency(currencystate);
        }}>+</button>}
        {!currencyplus && <button className='currency-minus' onClick={()=>{
            removeCurrency(currencystate);
        }}>-</button>}
    </div>
  )
}