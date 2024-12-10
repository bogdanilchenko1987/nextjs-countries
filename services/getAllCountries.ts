/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = "https://restcountries.com/v3.1/all";
import { Country } from "@/types/Country";
import { sortBy } from "ramda";

export default async function getAllCountries(): Promise<Country[]> {
  const res = await fetch(API_URL);
  const data = (await res.json()) as Country[];
  return sortBy((country: any) => country.name.common, data);
}
