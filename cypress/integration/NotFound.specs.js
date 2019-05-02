describe('Test for profiles component', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Header should be in the DOM', () => {
        cy.get('h1')
        .should('have.text', '404');
    });
});
