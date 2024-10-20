import { useState } from "react"
import './style.css'

export default function Country({country, handleVisitedCountries, handleVisitedFlags}) {
  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    setVisited(!visited)
  }

  

  // console.log(handleVisitedCountries)
  
  
  return (
    <>
    <div style={{
        border: '2px solid skyblue',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px'
    }}>
    <h3>Name: {country?.name?.common}</h3>
    <img src={country.flags.png} alt="" />
    <p>{country.region}</p>
    <p>{country.cca3}</p>
    <button style={{
      marginBottom: '20px'
    }} onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
    <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
    <br />
    <button className={visited ? 'visited' : ''} onClick={handleVisited}>{visited ? 'visited' : 'visit'}</button>
    </div>
    </>
  )
}
