import { useRouter } from 'next/router';

import { getCountryById } from '@/data/country-data';

function CountryDetailPage() {
  const router = useRouter();
  // const { pageId } = router.query;

  const [params] = router.query.countryId.split('-'); // [ 'countries', 'germany'

  const country = getCountryById(params);
  
  console.log('pageId', params, country);

  return <h2>Detail page for Country: {country.itemName}</h2>;
}

export default CountryDetailPage;