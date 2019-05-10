describe('Test for Landing page', () => {
  beforeEach(() => {
      cy.visit('/');
  });
  it('Div should have classname landing-page', () => {
    cy.get('div').eq(1).
    should('have.class', 'landing-page')
  });
  it('Div should have classname backdrop', () => {
    cy.get('div').eq(2)
    .should('have.class', 'backdrop')
  });
  it('Signin button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign in').click( { force: true })
    // .should('have.class', 'backdrop')
  });
  it('Signup button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign up').click( { force: true })
  });
  it('Logo text should be present on landing page', () => {
    cy.get('h1').eq(0).should('have.class', 'header-logo-text').contains('Authors Haven')
  });
});
