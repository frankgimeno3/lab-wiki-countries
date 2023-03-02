import { useParams } from "react-router-dom";
import CountriesList from "./CountriesList"
import "../App.css"

export default function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const country = countries.find((c) => c.alpha3Code === alpha3Code); 
  let countrysrc = 'https://flagpedia.net/data/flags/icon/72x54/'+country.alpha2Code.toLowerCase()+'.png'
  return (
    <div className="detailsContainer">
        <CountriesList countries={countries} />
        <div className="countryCcolumn">
            <img src={countrysrc} alt="Country Flag" />
            <p>Selected Country:</p>
            <h2>{country.name.common}</h2>
            <p>Capital:      {country.capital}</p>
            <p>Area:      {country.area} km²</p>
            <p>Borders:{country.borders.join(", ")}</p>
        </div>
    </div>
  );
}