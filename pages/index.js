
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { getFeaturedCountries } from "@/data/country-data";

import CountryList from "@/components/countries/country-list";

// const inter = Inter({
//   variable: '--inter-font',
// })
// MAIN HOMEPAGE

function HomePage() {


  const featuredCountries = getFeaturedCountries();
  return (
    <>
      <h1>Homepage</h1>
      <CountryList items={ featuredCountries }/>
    </>
  );
}

export default HomePage;
