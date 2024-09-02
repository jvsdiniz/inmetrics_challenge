Feature: Incluir produto no carrinho

  I want to include products in the cart

  @focus
  Scenario: Incluir produto no carrinho
    Given that I am accessing the web page
    When I search for an existing product
    And I click to see more product information
    And click add to cart 
    Then the item must be added to the cart
  
@focus 
  Scenario: Incluir produto no carrinho e validar na tela de pagamento.
    Given that I am accessing the web page
    When I search for an existing product
    And I click to see more product information
    And click add to cart
    And click on the checkout button
    Then the item on the payment screen should be displayed
