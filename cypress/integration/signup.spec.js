describe('Test for Signup', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });
  it('Image should have alt as signup-icon', () => {
    cy.get('img')
      .should('have.attr', 'alt', 'signup-icon');
  });
    it('Button should have type submit', () => {
    cy.get('img')
      .should('have.attr', 'alt', 'signup-icon');
    });
  it('Get the firstname input, type into it and verify that the value has been updated', () => {
    cy.get('.signup-form-input').eq(0)
      .type('forsetti')
      .should('have.value', 'forsetti')
  });
  it('Get the lastname input, type into it and verify that the value has been updated', () => {
    cy.get('.signup-form-input').eq(1)
      .type('frontend')
      .should('have.value', 'frontend')
  });
  it('Get the email input, type into it and verify that the value has been updated', () => {
    cy.get('.signup-form-input').eq(2)
      .type('forsetti@gmail.com')
      .should('have.value', 'forsetti@gmail.com')
  });
  it('Get the email input, type into it and verify that the value has been updated', () => {
    cy.get('.signup-form-input').eq(3)
      .type('forsettifrontend')
      .should('have.value', 'forsettifrontend')
  });
   it('Get the email input, type into it and verify that the value has been updated', () => {
    cy.get('.signup-form-input').eq(4)
      .type('forsetti1234')
      .should('have.value', 'forsetti1234')
  });
});
