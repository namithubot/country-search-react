import React from "react";
import { Country } from "../../search/models/Country.model";
import { Flex } from "antd";
import "./Intro.css";

/**
 * Component to show the introduction of the country.
 * @returns {JSX.Element} A react component for introduction of country.
 */
export default function CountryIntro(props: { countryToIntro: Country }) {
  const country = props.countryToIntro;

  return (
    <div className="intro">
      <Flex justify="center" gap="middle" vertical>
        <Flex justify="center" vertical={false}>
          <span className="country-title">
            <img className="search-flag" src={country.flagLink} />
            <h2>
              {country.officialName}
              {country.officialName !== country.commonName && (
                <span>({country.commonName})</span>
              )}
            </h2>
          </span>
        </Flex>
      </Flex>
      {country.alternativeSpellings?.length && (
        <Flex justify="center" className="native-names" gap="middle" vertical>
          {/* Native Names of the country */}
          <Flex justify="center" vertical={false}>
            {country.nativeNames.map((name) => (
              <span>{name}</span>
            ))}
          </Flex>
        </Flex>
      )}
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
    </div>
  );
}
