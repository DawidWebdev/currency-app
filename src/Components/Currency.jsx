import React from 'react'

export const Currency = ({ currencyname, currencycode, currencymid }) => {
  return (
    <div className='currency'>
        <div className="currency-name">{currencyname}</div>
        <div className="currency-code">{currencycode}</div>
        <div className="currency-mid">{currencymid}</div>
        <button className='currency-plus'>+</button>
    </div>
  )
}