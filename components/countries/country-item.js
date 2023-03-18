import Link from 'next/link';

import classes from './country-item.module.css';

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
                <Link href={exploreLink} >Explore Country's Wine</Link>
            </div>
        </li>
    );
}

export default CountryItem;