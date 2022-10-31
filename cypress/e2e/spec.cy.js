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

  it('should be able to make a new reservation', () => {
    cy.get('input[placeholder=name]').type('Emily');
    cy.get('input[placeholder=date]').type('12/12');
    cy.get('input[placeholder=time]').type('1:00');
    cy.get('input[name=number]').type('4');
    cy.get('[data-cy=form-section] > button').click();

    cy.get('[data-cy=single-card]').should('have.length', 5);
    cy.get('[data-cy=single-card]').contains('Emily');
  });

  it('should be able to cancel an exsisting reservation', () => {
    cy.get('[data-cy=resy-cards] > :nth-child(1) > button').click();
    cy.get('[data-cy=single-card]').should('have.length', 3);

    cy.get('[data-cy=resy-cards] > :nth-child(3) > button').click();
    cy.get('[data-cy=single-card]').should('have.length', 2);
  });

});