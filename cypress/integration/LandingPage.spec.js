describe('Test for Landing page', () => {
  beforeEach(() => {
      cy.visit('/');
  });
  it('Div should have classname landing-page', () => {
    cy.get('.landing-page')
    .should('have.class', 'landing-page')
  });
  it('Div should have classname backdrop', () => {
    cy.get('.backdrop')
    .should('have.class', 'backdrop')
  });
  it('Signin button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign in').click( { force: true })
  });
  it('Signup button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign up').click( { force: true })
  });
  it('Logo text should be present on landing page', () => {
    cy.get('h1').eq(0).should('have.class', 'header-logo-text').contains('Authors Haven')
  });
});
