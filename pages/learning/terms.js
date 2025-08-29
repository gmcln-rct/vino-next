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
        <title>Wine Terminologies - Winography | Learn About Wine Through Data Visualizations</title>
        <meta
          name="description"
          content="A list of wine terms and their definitions"
        />
      </Head>
      <section className={classes.termsPage}>
        <h1 className={classes.header}>Wine Terms</h1>
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
