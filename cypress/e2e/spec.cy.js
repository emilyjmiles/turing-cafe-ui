import resyData from '../fixtures/resyData.json';

describe('Turing Cafe', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', resyData);
    cy.visit('http://localhost:3000/');
  });

  it('should have an app title, form, and exsisting reservation cards', () => {
    cy.get('[data-cy=App]').contains('Turing Cafe Reservations');

    cy.get('[data-cy=form-section]').should('be.visible');
    cy.get('[data-cy=form-section]').find('input');
    cy.get('[data-cy=form-section]').contains('button', 'Make Reservation');

    cy.get('[data-cy=resy-cards]').should('be.visible');
    cy.get('[data-cy=single-card]').should('have.length', 4);
    cy.get('[data-cy=single-card]').contains('Number of Guests');
    cy.get('[data-cy=single-card]').contains('button', 'Cancel');
  });

});