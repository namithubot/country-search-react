/// <reference types="cypress" />

/// Mock Response for country search
import * as countries from '../search-country/countries.json';

context('Country Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should autocomplete for the given input', () => {
	// Type something in the search bar.
	cy.get('.search-input').type('Ind');

	// Mock the API response.
    cy.intercept('GET', '**/countries/*', countries).as('getCountries');

	cy.get('@getCountries.all').its('length').should('equal', 1);
	cy.click(`[data-testid="option-${countries[0].commonName}"]`);
  });
});
