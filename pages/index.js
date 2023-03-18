// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { getFeaturedCountries } from "@/data/country-data";

import CountryList from "@/components/countries/country-list";

// MAIN HOMEPAGE

function HomePage() {

  const featuredCountries = getFeaturedCountries();
  return (
    <>
      <h1>Homepage</h1>
      <div>
        <CountryList items={ featuredCountries }/>
      </div>
    </>
  );
}

export default HomePage;
