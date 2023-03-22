import { useRouter } from 'next/router';

import { getCountryById } from '@/data/country-data';

import {getDataItemById} from '@/data/utils';

import { COUNTRIES_WINE_DATA } from '@/data/country-wine-data-2016';

import BarChart from '@/components/graphs/bar-chart';

function CountryDetailPage() {
  const router = useRouter();
  console.log('router', router.query)
  
  const [params] = router.query.countryId.split('-');

  const countryWineData = getDataItemById(params, COUNTRIES_WINE_DATA);
  // const { pageId } = router.query;

  const country = getCountryById(params);

  const wineCategory = country.category === 'OW' ? 'Old World' : 'New World';
  
  console.log('pageId', params, country);

  return <>
    <h2 className="header">{country.itemName} Detail Page</h2>
    <BarChart units={countryWineData.units} dataYear={countryWineData.dataYear} redGrapeData={countryWineData.redGrapeData} whiteGrapeData={countryWineData.whiteGrapeData} />
    <div className="details">
      <p>Classification: {wineCategory}</p>
      <a href={country.link} target="_blank">More about Wine Region</a>
    </div>
    <div>
      <p>Data as of {countryWineData.dataYear}</p>
    </div>
  </>
  
}

export default CountryDetailPage;