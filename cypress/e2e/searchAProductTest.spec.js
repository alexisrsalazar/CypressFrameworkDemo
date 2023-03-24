import {navigationBar} from "../support/pageObject/pages/navigationBar.js";
import {resultPage} from "../support/pageObject/pages/resultPage.js"
import { itemPage } from "../support/pageObject/pages/itemPage.js";
const items = require('../support/pageObject/testData/products.json');
const locators = require('../support/pageObject/testData/locators.json');


describe('Test search a product and print it in the console', () => {

    it('Search an Iphone 14 pro max in Amazon', () => {
        cy.goToAmazon();
        navigationBar.searchProduct(items.Iphone14ProMax);
        resultPage.selectAProduct(locators.iphone14ProMax128GBPlata);
        itemPage.getThePrice();

    })
    


})