import Image from "next/image";
// import getAllCountries from "@/services/getAllCountries";
import getCountry from "@/services/getCountry";
import type { Country } from "@/types/Country";
import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

type Props = {
  params: Promise<{ country: string }>;
};

// export async function generateStaticParams() {
//   const countries: Country[] = await getAllCountries();
//   console.log(countries);
//   return countries.map((country) => ({
//     country: country.name.common,
//   }));
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const c = await getCountry(country);

  return {
    title: c.name.common,
  };
}

export default async function Country({ params }: Props) {
  const { country } = await params;
  const c = await getCountry(country);

  return (
    <section className={styles.wrapper}>
      <button className={styles.button}>
        <Link href="/">Back to Countries</Link>
      </button>
      <div className={styles.page}>
        <Image
          className={styles.img}
          src={c.flags.png}
          alt={c.name.common}
          width={300}
          height={200}
        />
        <div className={styles.content}>
          <h2>{c.name.common}</h2>
          <p>
            <b>Population:</b> {c.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {c.region}
          </p>
          <p>
            <b>Capital:</b> {c.capital}
          </p>
          <p>
            <b>Area:</b> {c.area.toLocaleString()} km²
          </p>
          <p>
            <b>Timezones:</b> {c.timezones.join(", ")}
          </p>
          {c.currencies && (
            <p>
              <b>Currencies:</b>
              {Object.values(c.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
          )}
          {c.languages && (
            <p>
              <b>Languages:</b> {Object.values(c.languages).join(", ")}
            </p>
          )}
          {c.borders && (
            <p>
              <b>Borders:</b> {c.borders.join(", ")}
            </p>
          )}
          <p>
            <b>Continent:</b> {c.continents.join(", ")}
          </p>
          <p>
            <b>Google Maps:</b> <a href={c.maps.googleMaps}>Link</a>
          </p>
        </div>
      </div>
    </section>
  );
}
