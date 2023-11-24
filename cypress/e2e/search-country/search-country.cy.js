/// <reference types="cypress" />

/// Mock Response for country search
import * as countries from './countries.json';

context('Country Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should autocomplete for the given input', () => {
	// Type something in the search bar.
	cy.get('.search-input').type('Indi');

	// Mock the API response.
    cy.intercept('GET', '**/countries/*', countries).as('getCountries');

	cy.get('@getCountries.all').its('length').should('equal', 1);
	cy.get('.country-search-label').should('have.length', 3);
  });

  it('should not show any option for a country that does not exist', function () {// Type something in the search bar.
	cy.get('.search-input').type('Westros');

	// Mock the API response as empty.
    cy.intercept('GET', '**/countries/*', []).as('getCountries');

	cy.get('@getCountries.all').its('length').should('equal', 1);
	cy.get('.country-search-label').should('have.length', 0);
  });
});
