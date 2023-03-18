import Link from 'next/link';

const { id, itemName, category } = props;

const exploreLink = `/countries/${id}`;

function CountryItem(props) {
  return (
    <li>
        <div>
            <div>
                <h2>COUNTRY NAME: { itemName }</h2>
            </div>
            <div>
                <p>CATEGORY: { category }</p>
            </div>
        </div>
        <div>
            <Link href={exploreLink} >Explore Country's Wuine</Link>
        </div>
    </li>
  );
}

export default CountryItem;