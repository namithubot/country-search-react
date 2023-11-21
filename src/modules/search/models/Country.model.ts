import { Currency } from "./Currency.model";
import { Demonyms } from "./Demonyms.model";
import { Language } from "./Language.model";

/**
 * Model to denote a country object.
 */
export interface Country {
    /**
     * Common Name of the country.
     */
    commonName: string;

    /**
     * Official name of the country.
     */
    officialName: string;

    /**
     * The names of the country used natively inside it.
     */
    nativeNames: string[];

    /**
     * Top level domains of the country.
     */
    domains: string[];

    /**
     * Whether or not the country is independent.
     */
    isIndependent: boolean;

    /**
     * Current political status of the country.
     */
    status: string;

    /**
     * Currencies used in the country.
     */
    currencies: Currency[];

    /**
     * Telephone codes in the country
     */
    countryCodes: number[];

    /**
     * Capitals of the country
     */
    capitals: string[];

    /**
     * Alternative local spellings of the country.
     */
    alternativeSpellings: string[];

    /**
     * Region the country is located in.
     */
    region: string;

    /**
     * Sub region the country is located in.
     */
    subRegion: string;

    /**
     * Major languages spoken in the country.
     */
    languages: Language[];

    /**
     * Whether or not the country is landlocked.
     */
    isLandlocked: boolean;

    /**
     * List of country codes of neighbouring nations.
     */
    neighbours: string[];

    /**
     * Area of the country in km square.
     */
    areaInkm: number;

    /**
     * Link to the openstreet map of the country
     */
    mapLink: string;

    /**
     * Population of the country.
     */
    population: number;

    /**
     * Timezone of the country in minutes with respect
     * to UTC.
     */
    timeZonesInMinutes: number[];

    /**
     * Continents the country is located in.
     */
    continents: string[];

    /**
     * Link to the flag image of the country.
     */
    flagLink: string;

    /**
     * Link to the coat of arms image of the country.
     */
    coatOfArmsLink: string;

    /**
     * Official beginning of the week in the country.
     */
    startOfWeek: string;

    /**
     * Whether or not country follows right handed driving.
     */
    isDrivingRightHanded: boolean;

    /**
     * What the citizen of the country referred as.
     */
    citizenDemonyms: Demonyms;
}
