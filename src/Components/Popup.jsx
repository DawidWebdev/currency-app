import React from 'react'

export const Popup = ({setPopupVisibility, removeCurrency, currencystate}) => {
  return (
    <div className="popup">
          <div className="popup-text">Do you want to remove the currency from the list?</div>
          <button className="popup-cancel-button" onClick={()=>{
            setPopupVisibility(false);
          }}>Cancel</button>
          <button className="popup-delete-button" onClick={()=>{
            removeCurrency(currencystate);
          }}>Delete</button>
    </div>
  )
}