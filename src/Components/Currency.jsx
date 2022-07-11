import React, {useState} from 'react'

export const Currency = ({ currencystate, id, currencyname, currencycode, currencymid, currencyplus, addCurrency, removeCurrency }) => {
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

    {popupVisibility && <div className="popup">
          <div className="popup-text">Do you want to remove the currency from the list?</div>
          <button className="popup-cancel-button" onClick={()=>{
            setPopupVisibility(false);
          }}>Cancel</button>
          <button className="popup-delete-button" onClick={()=>{
            removeCurrency(currencystate);
          }}>Delete</button>
        </div>}
    </>
  )
}