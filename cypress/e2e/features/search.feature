Feature: Search some products from a table

    Scenario: Search for a product
        Given I navigate to Amazon 
        When I search for the following <product name>:
        Then I shouldn't see the price empty, null and less than 1

    Examples: 
        |product name|
        |"Iphone 14 pro max"|
        |"Macbook Air"|
        |"Samsung galaxy s23"|