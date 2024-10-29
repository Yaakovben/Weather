import React from 'react'
interface Props{
    unit:(unit:string)=>void
}

export default function TypeUnit({unit}:Props) {
  return (
    <div className='unit'>
        <button className='buttonUnit' value={"metric"} onClick={(e) =>unit(e.currentTarget.value)}>C°</button>
        <button className='buttonUnit' value={"imperial"} onClick={(e) =>unit(e.currentTarget.value)}>F°</button>
    </div>
  )
}
