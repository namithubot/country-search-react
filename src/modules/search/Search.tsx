import React, { useState } from "react";
import { AutoComplete } from "antd";
import "./Search.css";
import { searchCountry } from "./services/Search-Country.service";
import { Country } from "./models/Country.model";
import CountryDetails from "../details/CountryDetails";

/**
 * Search autocomplete component.
 * This component defines an autocomplete for search countries.
 * @returns {JSX.Element} A react component for searching countries.
 */
export default function Search() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>({} as Country);
  const [isSearching, setIsSearching] = useState<NodeJS.Timeout>();
  const [searchString, setSearchString] = useState('');
  const onSelect = (selectedOfficialName: string) => {
    setSelectedCountry(
      countries.find(country => country.officialName === selectedOfficialName) || {} as Country);
  };

  const SearchCountry = async (countryName: string) => {
    setSearchString(countryName);
    clearTimeout(isSearching);

    // Wait for 1000 second and do a search API call.
    const timeoutId = setTimeout(async () => {   
      try {
        const countries = await searchCountry(searchString);
        setCountries(countries);
      } catch (e) {
        console.error(e);
      }
    }, 1000);

    setIsSearching(timeoutId);
  };

  const renderLabel = (country: Country) => (
    <span className="country-search-label" data-testid={`option-${country.commonName}`}>
      {country.commonName}

      <img className="search-flag" src={country.flagLink} />
    </span>
  );

  const options = countries.map((country) => ({
    label: renderLabel(country),
    value: country.officialName,
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
      <CountryDetails country={selectedCountry} />
    </div>
  );
}
