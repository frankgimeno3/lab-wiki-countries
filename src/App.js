import './App.css';
import { Route, Routes } from 'react-router-dom';
import countriesJson from './countries.json'
import CountriesList from './pages/CountriesList'
import CountryDetails from './pages/CountryDetails'

import Navbar from './components/Navbar'


const countries = countriesJson;
function App() {
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
