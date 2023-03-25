import Link from 'next/link';

function GrapeItem(props) {
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
            {/* <Link href="/grapes/[grapeId]" as={`/grapes/${props.grape.id}`}></Link> */}
        </div>
    </li>
  );
}

export default GrapeItem;