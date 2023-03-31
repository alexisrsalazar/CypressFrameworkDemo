//<reference types="Cypress" />
import {navigationBar} from "../support/pageObject/pages/navigationBar.js";
import {resultPage} from "../support/pageObject/pages/resultPage.js";
import { itemPage } from "../support/pageObject/pages/itemPage.js";
const items = require('../support/pageObject/testData/products.json');
const locators = require('../support/pageObject/testData/locators.json');
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
Given("I navigate to Amazon", () => {
    cy.goToAmazon();
});

When("I search for the following {string}:", (string) => {
        navigationBar.searchProduct(string)
        resultPage.selectTheFirstProduct(locators.firstProduct)
});

Then("I shouldn't see the price empty, null and less than 1", () => {
    cy.get(locators.price)
        .invoke('text')
        .then(price => {
        expect(price).not.to.be.empty
        expect(price).not.to.be.null
        expect(parseFloat(price.replace(/[^\d.-]/g, ''))).to.be.at.least(0);
        })
})