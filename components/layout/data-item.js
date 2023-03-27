import Link from 'next/link';

import classes from './data-item.module.css';

import Button from '../ui/button';

function DataItem(props) {
    const { id, itemName, dataType, category } = props;

    const grapePrefix = '/grapes/' + id + '/';
    const countryPrefix = '/countries/'


let grapeColor;

if (category === "R") {
    grapeColor = `classes.redGrapeColor`;
} else {
    grapeColor = "whiteGrapeColor";
}

    // let worldTopLink = countryPrefix + `worldtopten/${id}`;
    // let nationalTopLink = countryPrefix + `nationaltop/${id}`;
    // let textFill = "Countries"

    // if (dataType === "grape") {
    //     worldTopLink = grapePrefix + `worldtop/${id}`;
    //     textFill = "Grapes"
    // }

    return (
        <li 
            className={`${classes.item} ${category === "R" ? classes.redGrapeColor : classes.whiteGrapeColor}`} >
            <div className={classes.actions }>
                <Link href={grapePrefix} as={`/grapes/${id}`}> {itemName} </Link>

            </div>
        </li>
    );
}

export default DataItem;