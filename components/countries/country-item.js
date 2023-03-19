import Link from 'next/link';

import classes from './country-item.module.css';

import Button from '../ui/button';

function CountryItem(props) {
    const { id, countryName, category } = props;
    const exploreLink = `/countries/${id}`;

    return (
        <li 
            className={classes.item}>
            <div className={classes.content}>
                <div cla>
                    <h2>COUNTRY NAME: { countryName }</h2>
                </div>
                <div>
                    <p>CATEGORY: { category }</p>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Explore Country's Wine</Button>
            </div>
        </li>
    );
}

export default CountryItem;