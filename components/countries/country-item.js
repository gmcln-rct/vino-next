import Link from 'next/link';
import Image from 'next/image';

import classes from './country-item.module.css';

import { getDataItemById } from '@/data/utils';

import { COUNTRIES_DATA } from '@/data/country-data';
import Button from '../ui/button';

function CountryItem(props) {
    const { id, countryName, category } = props;

    const country = getDataItemById(id, COUNTRIES_DATA);
  
    
    if (!country || !country.id) {
      return (
        <div className="center">
          <p>Loading...</p>
        </div>
      );
    }
    const flagImage = `/images/flags/flag-${country.id}.svg`;
    const flagImageAlt = `Flag of ${country.itemName}`;

    return (
        <li 
            className={classes.item}>
                <Link href='/countries/[countryId]' as={`/countries/${id}`}>{countryName} Wine Data
                <Image src={flagImage} alt={flagImageAlt} className="flagImage" width={100} height={75} />
</Link>
            {/* <h2>{ countryName }</h2>
            <div className={classes.actions}>
                <Button link={worldTopTenLink}>World Top 10 Grapes</Button>
                <Button link={nationalTopLink}>Country Top 10 Grapes</Button>
            </div> */}
        </li>
    );
}

export default CountryItem;