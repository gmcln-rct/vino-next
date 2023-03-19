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
                <div cla>
                    <h2>Country: { countryName }</h2>
                </div>
                <div>
                    <p>Category: { categoryName }</p>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Explore { countryName } Wine</Button>
            </div>
        </li>
    );
}

export default CountryItem;