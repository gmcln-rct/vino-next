import Link from 'next/link';

import classes from './data-item.module.css';

import Button from '../ui/button';

function DataItem(props) {
    const { id, itemName, dataType, category } = props;

    const grapePrefix = '/grapes/'
    const countryPrefix = '/countries/'

    let worldTopLink = countryPrefix + `worldtopten/${id}`;
    let nationalTopLink = countryPrefix + `nationaltop/${id}`;
    let textFill = "Countries"

    if (dataType === "grape") {
        worldTopLink = grapePrefix + `worldtop/${id}`;
        textFill = "Grapes"
    }

    return (
        <li 
            className={classes.item}>
            <h2>{ itemName }</h2>
            <div className={classes.actions}>
                <Button link={worldTopLink}>World Top {textFill}</Button>
                {dataType==='country' && <Button link={nationalTopLink}>Country Top {textFill}</Button>}
            </div>
        </li>
    );
}

export default DataItem;