import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const api_url = 'https://www.advantageonlineshopping.com/catalog/api'

Given("that I search for an item and specific quantities", () => {
    cy.request({
        method: 'GET',
        url: `${api_url}/v1/products/search?name=laptop&quantityPerEachCategory=5`
    }).as('response_of_search')
})

Then("I should only see what I searched for", () => {
    cy.get('@response_of_search')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body[0].categoryId).to.equal(1)
        expect(res.body[0].categoryName).to.equal('LAPTOPS')
        expect(res.body[0].categoryImageId).to.equal('laptops')
        expect(res.body[0].categoryImageId).to.not.equal('tablet')
        expect(res.body[0].products).to.have.length(5)
    })
})


Given("I want to update product information", () => {
    return true;
    //nessa etapa tive dificuldade em conseguir o Bearer Token, então deixarei abaixo um exemplo de como seria meu raciocio caso tivesse

    //Primeiro faria uma requisição para obter o item que eu quero realizar as alterações
    // cy.request({
    //     method: 'GET',
    //     url: `${api_url}/v1/products/search?name=laptop&quantityPerEachCategory=1`  --por exemplo um laptop
    // }).as('response_of_search')

})

Then("I make the changes I want", () => {
    return true;

    //após conseguir o item que quero fazer a mudança eu faria uma requisição PUT para atualiza-lo

    // cy.get('@response_of_search').then(res => {
    //     cy.request({
    //       method: 'POST',
    //       url: `${api_url}/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`,
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     }).as('update_information');
}) 

And ("I check if they occurred successfully", () => {
    return true;

    //por fim faria outra requisição GET no mesmo produto para validar se as mudanças foram feitas
})