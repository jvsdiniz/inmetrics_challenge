Feature: Verificar a API Advantage Online Shopping 

  I want to validate the API

  @focus
  Scenario: Realizar busca de itens através da API
    Given that I search for an item and specific quantities
    Then I should only see what I searched for

    @focus
  Scenario: Atualizar informações de um produto
    Given I want to update product information
    Then I make the changes I want
    And I check if they occurred successfully