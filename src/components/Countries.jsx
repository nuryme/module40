import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  // const [markVisited, setMarkVisited] = useState(false)
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    const newFlags = [...visitedFlags, flags];
    setVisitedFlags(newFlags);
  };

  //--------------- remove
  //-----remove item from an array in a state
  //use filter to select all the elements except the one you want to remove


  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul
          style={{
            width: "200px",
            margin: "auto",
            textAlign: "center",
            backgroundColor: "lightblue",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          {visitedCountries.map((country, idx) => (
            <li key={idx}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div style={{
        width: '100%',
        textAlign: 'left'
      }}>
        {visitedFlags.map((flag, index) => (
          <img key={index} style={{
            margin: '20px',
            width: '150px'
          }} src={flag}></img>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
}
