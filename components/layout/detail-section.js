import classes from './detail-section.module.css';

const DetailSection = (props) => {

  const { wineCategory, countryLink, countryName, countryRegions} = props;

  return (
    <section className={classes.details}>
        <p>Classification: {wineCategory}</p>
        <a href={countryLink} target="_blank">
          More about Wine Region
        </a>
      </section>
  );
};

export default DetailSection;
