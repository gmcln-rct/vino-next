import classes from './detail-section.module.css';

const DetailSection = (props) => {

  const { wineCategory, countryLink, countryName, countryRegions} = props;

  let regionList = countryRegions.length > 0 ? countryRegions.join(', ') : 'No regions listed';


  return (
    <section className={classes.details__container}>
        <h2>Wines of {countryName}</h2>
        <div className={classes.details__items}>
        <p>Classification: {wineCategory}</p>
        <p>Regions: {regionList}</p>
        <a href={countryLink} target="_blank">
          Read Wikipedia Page in new tab
        </a>
        </div>
      </section>
  );
};

export default DetailSection;
