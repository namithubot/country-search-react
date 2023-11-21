import React, { useState } from "react";
import { AutoComplete } from "antd";
import "./Search.css";
import { searchCountry } from "./services/Search-Country.service";
import { Country } from "./models/Country.model";

/**
 * Search autocomplete component.
 * This component defines an autocomplete for search countries.
 * @returns {JSX.Element} A react component for searching countries.
 */
export default function Search() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isSearching, setIsSearching] = useState<NodeJS.Timeout>();
  const [searchString, setSearchString] = useState('');
  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const SearchCountry = async (countryName: string) => {
    setSearchString(countryName);
    clearTimeout(isSearching);

    // Wait for 1000 second and do a search API call.
    const timeoutId = setTimeout(async () => {   
      try {
        const countries = await searchCountry(countryName);
        setCountries(countries);
      } catch (e) {
        console.error(e);
      }
    }, 1000);

    setIsSearching(timeoutId);
  };

  const renderLabel = (country: Country) => (
    <span className="country-search-label">
      {country.commonName}

      <img className="search-flag" src={country.flagLink} />
    </span>
  );

  const options = countries.map((country) => ({
    label: renderLabel(country),
    value: country.commonName,
  }));

  return (
    <div className="Search-Countries">
      <AutoComplete
        className="search-input"
        options={options}
        onSelect={onSelect}
        onSearch={SearchCountry}
        placeholder="Search countries"
      />
    </div>
  );
}
