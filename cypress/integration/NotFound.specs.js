describe('Test for Not Found component', () => {
    beforeEach(() => {
        cy.visit('/*');
    });
    it('Header should be in the DOM', () => {
        cy.get('h1')
        .should('have.text', '404');
    });
});
