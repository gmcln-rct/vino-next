import Link from 'next/link';

import classes from './country-item.module.css';

import Button from '../ui/button';

function CountryItem(props) {
    const { id, countryName, category } = props;
    const exploreLink = `/countries/${id}`;

    const categoryName = category !== 'NW' ? 'Old World' : 'New World';

    return (
        <li 
            className={classes.item}>
            <div className={classes.content}>
                <h2>Country: { countryName }</h2>
                <p>Category: { categoryName }</p>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Explore</Button>
            </div>
        </li>
    );
}

export default CountryItem;