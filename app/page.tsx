/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import getAllCountries from "@/services/getAllCountries";
import styles from "./page.module.css";
import { Country } from "@/types/Country";
import CountryCard from "@/components/CountryCard";
import { useEffect, useState } from "react";
import { CountrySearch } from "@/components/CountrySearch";

export default function Home() {
  // const countries = await getAllCountries();
  const [countries, setCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);

  const filteredCountries = () => {
    const filterlowerCase = search.toLowerCase();
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterlowerCase)
    );
  };

  return (
    <div className={styles.container}>
      <CountrySearch
        onSearch={(e) => setSearch(e.target.value)}
        search={search}
      />
      <div className={styles.page}>
        {filteredCountries().map((country: Country) => (
          <CountryCard key={country.cca3} {...country} />
        ))}
      </div>
    </div>
  );
}
