describe('Test for login modal', () => {
  it('User should be able to login', () => {
    cy.visit('/');

    cy.get('.header-nav-menu .navbar-button-item:first').click();

    cy
      .get('#email')
      .type('d.mark@example.com')
      .should('have.value', 'd.mark@example.com');

    cy
      .get('#password')
      .type('soldier123')
      .should('have.value', 'soldier123')
      .blur();

    cy.get('.login-form-btn').click();
  });
});
