describe('Test for profiles component', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Title should be forsetti', () => {
        cy.contains('Forsetti');
    });
    it('Image should be in the DOM', () => {
        cy.get('img')
        .should('have.attr', 'alt', 'ninja');
    });
});