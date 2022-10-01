describe("Test the hime page",()=>{
    it("Test the localhost",()=>{
        cy.visit("http://localhost:3000");
        cy.get('.logo').should('have.length',1)
        cy.get('[data-testid="DseSelectButton"]').click();
        cy.get('[aria-label="London"]').should('have.length',1);
        cy.get('[aria-label="London"]').click();
        cy.get('[data-testid="DseSelectButton"] > .dse-text').contains('London');
    })
})