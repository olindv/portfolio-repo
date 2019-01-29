describe('My first Test', function(){
    it('Visit the Portfolio page', function () {
        cy.visit('http://localhost:3000/')

    
        cy.get('.button__auth')
            .should('contain', 'Авторизоваться')
            .click()
    })
})