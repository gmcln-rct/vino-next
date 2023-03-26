import Link from 'next/link';

import classes from './data-item.module.css';

import Button from '../ui/button';

function DataItem(props) {
    const { id, itemName, dataType, category } = props;

    const worldTopTenLink = `/countries/worldtopten/${id}`;
    const nationalTopLink = `/countries/nationaltop/${id}`;

    return (
        <li 
            className={classes.item}>
            <h2>{ itemName }</h2>
            <div className={classes.actions}>
                <Button link={worldTopTenLink}>World Top 10 Grapes</Button>
                <Button link={nationalTopLink}>Country Top 10 Grapes</Button>
            </div>
        </li>
    );
}

export default DataItem;