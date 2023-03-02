import { Link } from "react-router-dom";
import "../App.css"

export default function CountriesList({countries}) {
    return (
      <div className="countryCcolumn">
        <ul>
          {countries.map((country) => (
            <li key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`}>
                  <img src={'https://flagpedia.net/data/flags/icon/72x54/'+country.alpha2Code.toLowerCase()+'.png'} alt="Country Flag" />
                  <br/>
                  {country.name.common} ({country.alpha3Code})
                </Link>
            </li>
      ))}
    </ul>
    </div>
      );
}


      