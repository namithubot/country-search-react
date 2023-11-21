import { Country } from "../models/Country.model";

/**
 * Searches of a country by their name or part of their name.
 * @param {string} country Country name to be searched for.
 * @returns {Country[]} List of the countries matching the name.
 */
export async function searchCountry(country: string): Promise<Country[]> {
  const response = await fetch(`http://localhost:3000/countries/${country}`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
}
