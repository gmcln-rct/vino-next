import Link from "next/link";

const dataSourceLink =
  "https://economics.adelaide.edu.au/wine-economics/databases/";

function HistoricChartNotes() {
  return (
    <div>
      <p className="dataSource">
        Historical data not available for all years.
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
