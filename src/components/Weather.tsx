import React from 'react'


interface Props{
    weather:{
        temp:String,
        icon:string,
        country:string
    }
    
}

export default function Weather({weather:{temp,icon,country}}:Props) {
  return (
    <div className='weather'>
        <h1>{ country !="Loading...♻️" ? `Weather for ${country}`: "Loading...♻️"}</h1>
        <h2>{temp ? `${temp}°`:""}</h2>
        {icon?  <img src={icon} alt='Weather icon' ></img> : ""}

        


    </div>
    
  )
}
