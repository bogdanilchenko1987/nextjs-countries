// import { IoSearch } from "react-icons/io5";

import styles from "./CountrySearch.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  onSearch: (value: any) => void;
  search: any;
};

const CountrySearch = ({ onSearch, search }: Props) => {
  return (
    <input
      className={styles.inputContainer}
      type="text"
      name="search"
      placeholder="Search a country..."
      value={search}
      onChange={onSearch}
    />
  );
};

export { CountrySearch };
