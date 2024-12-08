import React from 'react'

const Type = () => {
  return (
    <div className=' grid grid-cols-1 p-5 leading-10 bg-slate-200'>
      <p>Type</p>
      <span className='font-bold mb-4'><input type="checkbox"  /> Sport (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> Suv (12)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> MPV (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> Seden (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> Coupe (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> HatchBack (10)</span>
      <h3>CAPICITY</h3>
      <span className='font-bold mb-4'><input type="checkbox"  /> 2 person (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> 4 person (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> 6 person (10)</span>
      <span className='font-bold mb-4'><input type="checkbox"  /> 8 person (10)</span>
      <h4>PRICE</h4>
      <span><input type="range"  /> <br />Max.$100.00 (10)</span>
      
    </div>
  )
}

export default Type;
