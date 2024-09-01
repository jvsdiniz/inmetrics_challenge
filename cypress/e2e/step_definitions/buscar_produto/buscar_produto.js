import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("that I am accessing the web page", () => {
    cy.visitHomePage() //comando personalizado para ser reutilizado durante todos os testes
})

When("I search for an existing product", () => {
    cy.get('#menuSearch')
        .click()
        
    cy.get('#autoComplete')
        .type(`tablet {enter}`)
})

Then("products that exist must be shown", () => {
    cy.get(':nth-child(1) > :nth-child(4) > .productName')
        .should('be.visible')
        .contains('Tablet')
})


When("I look for products that don't exist", () => {
    cy.get('#menuSearch')
        .click()
    cy.get('#autoComplete')
        .type(`televisão {enter}`)
})

Then("the validation message should be displayed", () => {
    cy.get('.noProducts > .ng-binding')
        .should('be.visible')

    cy.get('.searchPunchout')
        .should('be.visible')   
})
