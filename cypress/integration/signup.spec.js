describe('Signup', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });
  it('Should load an image with its attribute as signup-icon', () => {
    cy.get('img')
      .should('have.attr', 'alt', 'signup-icon');
  });
  it('should simulate the input action for the firstname', () => {
    cy.get('.signup-form-input').eq(0)
      .type('forsetti')
      .should('have.value', 'forsetti')
  });
  it('should simulate the input action for the lastname', () => {
    cy.get('.signup-form-input').eq(1)
      .type('frontend')
      .should('have.value', 'frontend')
  });
  it('should simulate the input action for the email', () => {
    cy.get('.signup-form-input').eq(2)
      .type('forsetti@gmail.com')
      .should('have.value', 'forsetti@gmail.com')
  });
  it('should simulate the input action for the password', () => {
    cy.get('.signup-form-input').eq(3)
      .type('forsettifrontend')
      .should('have.value', 'forsettifrontend')
  });
   it('should simulate the input action for the username', () => {
    cy.get('.signup-form-input').eq(4)
      .type('forsetti1234')
      .should('have.value', 'forsetti1234')
  });
});
