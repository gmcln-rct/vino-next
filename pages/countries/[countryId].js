import { useRouter } from 'next/router';

import { getCountryById } from '@/data/country-data';

function CountryDetailPage() {
  const router = useRouter();
  
  const [params] = router.query.countryId.split('-'); 
  // const { pageId } = router.query;

  const country = getCountryById(params);
  
  console.log('pageId', params, country);

  return <>
    <h2>Detail page for Country: {country.itemName}</h2>;
    <a href={country.link} target="_blank">Info about Wine Region</a>
  </>
  
  
}

export default CountryDetailPage;