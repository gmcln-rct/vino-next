import Link from 'next/link';

function CountryItem(props) {
  return (
    <li>
        <div>
            <div>
                <h2>TITLE</h2>
            </div>
            <div>
                <p>DESCRIPTION</p>
            </div>
        </div>
        <div>
            <Link href="/countries/[countryId]" as={`/countries/${props.country.id}`}></Link>
        </div>
    </li>
  );
}

export default CountryItem;