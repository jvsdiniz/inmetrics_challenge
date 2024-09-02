import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given("that I am accessing the web page", () => {
    cy.visitHomePage() //comando personalizado para ser reutilizado durante todos os testes
})

When("I search for an existing product", () => {
    cy.get('#menuSearch')
        .click()

    cy.get('#autoComplete')
        .type(`tablet {enter}`)
})

And("I click to see more product information", () => {
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
})

And("click add to cart", () => {
    cy.get('.fixedBtn > .roboto-medium').click()
})

Then("the item must be added to the cart", () => {
    cy.get('a > h3.ng-binding')
        .should('be.visible')

})


And("click on the checkout button", () => {
    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp')
        .click()
})

Then ("the item on the payment screen should be displayed", () => {
    cy.validatePaymentScreen()
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding').should('be.visible')
})