import React from 'react'

interface Props{
    location:(location:string)=>void
}

export default function Search({location}:Props) {
  return (
    <div className='search'>
        <input type='text' 
        placeholder='Search Location     🔍' 
        onChange={(e) =>{location(e.target.value)}} >  
        </input>
    </div>
  )
}
