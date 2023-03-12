import GrapeItem from './grape-item';

function GrapeList(props) {

    const { items } = props;

    return (
        <ul>
            {items.map((grape) => (<GrapeItem key={grape.id} grape={grape} />))}
        </ul>
    );
}

export default GrapeList;