import './App.css';
import { Route, Routes } from 'react-router-dom';
// import countriesJson from './countries.json'
import { useState, useEffect } from 'react';
import CountriesList from './pages/CountriesList'
import CountryDetails from './pages/CountryDetails'

import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/>}  />
      </Routes>
    </div>
  );
}

export default App;
