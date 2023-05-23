import Link from "next/link";

const dataSourceLink =
  "https://economics.adelaide.edu.au/wine-economics/databases/";

function HistoricChartNotes() {
  return (
    <div>
      <p className="dataSource">
        Note that the starting year for historical data varies by country.
      </p>
      <p className="dataSource">
        Data Source:{" "}
        <Link href={dataSourceLink} className="dataSource">
          Wine Economics Research Centre, University of Adelaide
        </Link>
      </p>
    </div>
  );
}

export default HistoricChartNotes;
