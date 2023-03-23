import { getFeaturedCountries, getAllCountries } from "@/data/country-data";

import CountryList from "@/components/countries/country-list";


function CountryIndex() {

  const allCountries = getAllCountries();
    return (
      <div>
          <h1>Country Index</h1>
          <CountryList items={ allCountries }/>
      </div>
    )
  }
  
  export default CountryIndex;