import React, { useEffect, useState } from "react";
import { Country } from "../../search/models/Country.model";
import { Flex, List, Statistic } from "antd";
import "./GeographicDetails.css";
import { searchCountryByCodes } from "../../search/services/Search-Country.service";

/**
 * Component to show the country geographic details.
 * @returns {JSX.Element} A react component for geography of country.
 */
export default function GeographicDetails(props: { geoCountry: Country }) {
  const country = props.geoCountry;
  const [neighbouringCountries, setNeighbouringCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function getNeighbouringCountries(codes: string[]) {
      const countries = await searchCountryByCodes(country.neighbours);
      setNeighbouringCountries(countries);
    }
    
    getNeighbouringCountries(country.neighbours);
  });

  return (
    <div className="geography">
      <Flex
        wrap="nowrap"
        justify="space-between"
        className="info long-info"
        vertical
      >
        <Flex className="long-info-item">
          <Statistic title="Continents" value={country.continents.join(", ")} />
        </Flex>
        <Flex className="long-info-item">
          <Statistic
            title="Region"
            value={
              (country.subRegion ? `${country.subRegion}, ` : "") +
              country.region
            }
          />
        </Flex>
        <Flex className="long-info-item">
          <Statistic title="Capitals" value={country.capitals.join(", ")} />
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
            title="Landlocked?"
            value={country.isLandlocked ? "Yes" : "No"}
          />
        </Flex>

        <Flex className="basic-info-item">
          <Statistic title="Area" value={country.areaInkm + " sq km"} />
        </Flex>
      </Flex>
      <List
      header={<div>Neighbors</div>}
      bordered
      dataSource={neighbouringCountries}
      renderItem={(country) => (
        <List.Item>
          {country.officialName}
        </List.Item>
      )}
    />
    <div className="map-link">
      <a href={country.mapLink} target="_blank">Click Here to open te map in new tab.</a>
    </div>
    </div>
  );
}
