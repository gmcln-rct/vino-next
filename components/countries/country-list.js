import CountryItem from './grape-item';

function CountryList(props) {

    const { items } = props;

    return (
        <ul>
            {items.map((country) => (<CountryItem key={country.id} country={grape} />))}
        </ul>
    );
}

export default CountryList;