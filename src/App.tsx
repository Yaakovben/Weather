import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import TypeUnit from './components/TypeUnit'

function App() {
  const [Location, setLocation] = useState<string>("Israel")
  const [weather,setWeather] = useState({temp:"",icon:"",country:"Loading...♻️"})
  const [Unit, setUnit] = useState<String>("metric")
 
  useEffect(()=>{
    (async() =>{
      try {
        
        const keyApi = "d7f64e05043d19af9eb95658ec1a2f74"
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${keyApi}&units=${Unit}`)
        const data = await result.json()
        setWeather({temp:data.main.temp,icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,country:data.name})
  
        console.log(weather.temp);
        console.log(weather.icon);
        console.log(weather.country);
      } catch (err) {
        setWeather({temp:"",icon:"",country:"Loading...♻️"})
        
      }
      
    })()

  },[Location, Unit])
console.log(Location);

  return (
    <div className='app'>
     <Search location={setLocation}/>
     <Weather weather={weather} />
     <TypeUnit unit={setUnit}/>
     

    </div>
  )
}

export default App
