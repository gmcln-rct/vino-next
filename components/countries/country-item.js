import Link from 'next/link';

function CountryItem(props) {
    const { id, itemName, category } = props;
    const exploreLink = `/countries/${id}`;
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