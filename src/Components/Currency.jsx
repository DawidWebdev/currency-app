import React, {useState} from 'react'
import { Popup } from './Popup';

export const Currency = ({ currencystate, id, currencyname, currencycode, currencymid, currencyplus, addCurrency, removeCurrency}) => {
  const[popupVisibility, setPopupVisibility] = useState(false);

  return (
    <>
      <div className='currency'>
        <div className="currency-name">{currencyname}</div>
        <div className="currency-code">{currencycode}</div>
        <div className="currency-mid">{currencymid}</div>
        {currencyplus && <button className='currency-plus' onClick={()=>{
            addCurrency(currencystate);
        }}>+</button>}
        {!currencyplus && <button className='currency-minus' onClick={()=>{
            setPopupVisibility(true);
        }}>-</button>}
      </div>

      {popupVisibility && <Popup setPopupVisibility={setPopupVisibility} removeCurrency={removeCurrency} currencystate={currencystate}/>}
    </>
  )
}