import Head from "next/head";

import { useState } from "react";

import { WINE_TERMS } from "@/data/terms";

import classes from "./terms.module.css";

export default function WineTerms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(WINE_TERMS);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredTerms(WINE_TERMS);
    } else {
      setFilteredTerms(
        WINE_TERMS.filter((term) =>
          term.word.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Head>
        <title>Wine Terms Glossary | Winography</title>
        <meta
          name="description"
          content="Complete wine terminology glossary with definitions. Learn wine terms from Aeration to Vintage including appellation, terroir, tannins, and more. Essential wine vocabulary for enthusiasts."
        />
        <link rel="canonical" href="https://winography.net/learning/terms/" />
        <meta property="og:title" content="Wine Terms Glossary | Winography" />
        <meta property="og:description" content="Complete wine terminology glossary with searchable definitions for wine enthusiasts and professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winography.net/learning/terms/" />
        <meta property="og:image" content="https://winography.net/images/site-images/homepage-masthead.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": WINE_TERMS.slice(0, 50).map(term => ({
                "@type": "Question",
                "name": `What is ${term.word}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": term.definition
                }
              }))
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://winography.net/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Learning",
                "item": "https://winography.net/learning/"
              }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Wine Terms",
                "item": "https://winography.net/learning/terms/"
              }]
            })
          }}
        />
      </Head>
      <section className={classes.termsPage}>
        <h1 className={classes.header}>Wine Terms Glossary</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Explore our comprehensive wine terminology glossary. Search through essential wine terms, from viticulture to tasting notes.
        </p>
        <div className={classes.searchContainer}>
          <label className={classes.searchLabel}>Search</label>
          <input
            type="text"
            placeholder="Filter wine terms"
            value={searchTerm}
            onChange={handleSearch}
            className={classes.searchInput}
          />
        </div>
        <ul className={classes.termsList}>
          {filteredTerms.map((term, index) => (
            <li key={index} className={classes.listItem}>
              <span className={classes.term}>{term.word}</span>{" "}
              {term.definition}{" "}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
