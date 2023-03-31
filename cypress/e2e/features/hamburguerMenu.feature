Feature: Hamburguer Menu   

    Scenario: Verify elements on Hamburger left menu
    Given I navigate to Amazon
    When I click on the left Menu
    Then I should see different elements on Buscar Por Categoría and Programas Y Características

    Scenario: Verify hamburger left menu - Negative Scenario
    Given I navigate to Amazon
    When I click on the left Menu
    Then I should NOT see elements from testing stage