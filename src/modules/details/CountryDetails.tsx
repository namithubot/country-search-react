import React from "react";
import { Country } from "../search/models/Country.model";
import { Flex, Radio, Statistic } from "antd";
import "./CountryDetails.css";
import Timezone from "./Timezone/Timezone";
import CountryIntro from "./Intro/Intro";
import GeographicDetails from "./GeographicDetails/GeographicDetails";

/**
 * Search autocomplete component.
 * This component defines an autocomplete for search countries.
 * @returns {JSX.Element} A react component for searching countries.
 */
export default function CountryDetails(props: { country: Country }) {
  const country = props.country;
  if (!country.officialName) {
    return (
      <>
        <div> Select a country to show information.</div>
      </>
    );
  }

  return (
    <div className="details">
      <CountryIntro countryToIntro={country} />
      <Flex
        justify="center"
        className="alternative-spellings"
        gap="middle"
        vertical
      >
        {/* Native Names of the country */}
        <Flex justify="center" vertical={false}>
          {country.alternativeSpellings.join(" or ")}
        </Flex>
      </Flex>
      <Flex
        wrap="nowrap"
        justify="space-between"
        className="info basic-info"
        vertical
      >
        <Flex className="basic-info-item">
          <Statistic
            title="Driving"
            value={
              (country.isDrivingRightHanded ? "Right" : "Left") + " Handed"
            }
          />
        </Flex>
        <Flex className="basic-info-item">
          <Statistic
            title="Independence status"
            value={country.isIndependent ? "Yes" : "No"}
          />
        </Flex>
      </Flex>
      <Flex
        wrap="nowrap"
        justify="space-between"
        className="info basic-info"
        vertical
      >
        <Flex className="basic-info-item">
          <Statistic title="Political status" value={country.status} />
        </Flex>
        <Flex className="basic-info-item">
          <Statistic title="Week start" value={country.startOfWeek} />
        </Flex>
        <Flex className="basic-info-item">
          <Statistic title="Population" value={country.population} />
        </Flex>
      </Flex>
      <Flex
        wrap="nowrap"
        justify="space-between"
        className="info long-info"
        vertical
      >
        <Flex className="long-info-item">
          <Statistic
            title="Domains"
            value={
              country.domains?.length
                ? country.domains.join(", ")
                : "No Domains Found"
            }
          />
        </Flex>
        <Flex className="long-info-item">
          <Statistic
            title="Currencies"
            value={country.currencies
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(", ")}
          />
        </Flex>
        <Flex className="long-info-item">
          <Statistic
            title="Demonyms"
            value={`Male: ${country.citizenDemonyms.male}, Female: ${country.citizenDemonyms.female}`}
          />
        </Flex>
        <Flex className="long-info-item">
          <Statistic
            title="Languages"
            value={country.languages.map(language => language.name).join(', ')}
          />
        </Flex>
      </Flex>
      <Flex wrap="nowrap" justify="center" className="timezones" vertical>
        <Timezone timezonesInMinutes={country.timeZonesInMinutes} />
      </Flex>
      <GeographicDetails geoCountry={country} />
    </div>
  );
}
