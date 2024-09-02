Cypress.Commands.add('visitHomePage', () => {
    cy.visit('/')
})

Cypress.Commands.add('validatePaymentScreen', () => {
    cy.get('article').contains('ORDER PAYMENT').should('be.visible')
    cy.contains('LOGIN').should('be.visible')
    cy.contains('REGISTRATION').should('be.visible')
})