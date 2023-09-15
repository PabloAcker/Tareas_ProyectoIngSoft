/// <reference types="cypress" />

describe('Calculator Component', () => {
  beforeEach(() => {
    // Reemplaza con la URL correcta donde está alojada tu aplicación
    cy.visit('http://localhost:5173'); 
  });

  it('should render input and output fields', () => {
    cy.get('[aria-label="input-field"]').should('exist');
    cy.get('[aria-label="output-field"]').should('exist');
  });

  it('should allow users to enter numbers and operators', () => {
    cy.get('[aria-label="input-field"]').type('5+5');
    cy.get('[aria-label="input-field"]').should('have.value', '5+5');
  });

  it('should show the correct result when "=" button is pressed', () => {
    cy.get('[aria-label="input-field"]').type('5+5');
    cy.get('[aria-label="button-equals"]').click();
    cy.get('[aria-label="output-field"]').should('have.value', '10');
  });

  it('should show "Error" if the expression is invalid', () => {
    cy.get('[aria-label="input-field"]').type('5+');
    cy.get('[aria-label="button-equals"]').click();
    cy.get('[aria-label="output-field"]').should('have.value', 'Error');
  });

  it('should clear input and output fields when "Clear" button is pressed', () => {
    cy.get('[aria-label="input-field"]').type('5+5');
    cy.get('[aria-label="button-clear"]').click();
    cy.get('[aria-label="input-field"]').should('have.value', '');
    cy.get('[aria-label="output-field"]').should('have.value', '');
  });

  it('should calculate percentages', () => {
    cy.get('[aria-label="input-field"]').type('100');
    cy.get('[aria-label="button-%"]').click();
    cy.get('[aria-label="output-field"]').should('have.value', '1');
  });

  it('should perform operations with decimals', () => {
    cy.get('[aria-label="input-field"]').type('0.1+0.2');
    cy.get('[aria-label="button-equals"]').click();
    cy.get('[aria-label="output-field"]').invoke('val').then((val) => {
      expect(parseFloat(val)).to.be.closeTo(0.3, 0.0001);
    });
  });
});
