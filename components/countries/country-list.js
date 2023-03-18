import CountryItem from './country-item';

function CountryList(props) {

    const { items } = props;

    return (
        <ul>
            {items.map((country) => (
            <CountryItem 
                key={country.id}
                id={country.id}
                countryName={country.itemName}
                category={country.category}
                />
                ))}
        </ul>
    );
}

export default CountryList;