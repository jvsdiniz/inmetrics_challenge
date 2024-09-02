Feature: Buscar Produto

  I want to search products
  
  @focus
  Scenario: Realizando a busca de um produto existente
    Given that I am accessing the web page
    When I search for an existing product
    Then products that exist must be shown

  @focus
  Scenario: Realizando a busca de um produto não existente
    Given that I am accessing the web page
    When I look for products that don't exist
    Then the validation message should be displayed