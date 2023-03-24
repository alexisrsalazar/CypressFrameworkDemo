import {navigationBar} from "../support/pageObject/pages/navigationBar.js";
import {resultPage} from "../support/pageObject/pages/resultPage.js"
import { itemPage } from "../support/pageObject/pages/itemPage.js";
const items = require('../support/pageObject/testData/products.json');
const locators = require('../support/pageObject/testData/locators.json');


describe('Test search a product and print it in the console', () => {

    it('Search an Iphone 14 pro max in Amazon', () => {
        cy.goToAmazon(); //Navigate to Amazon Web
        navigationBar.searchProduct(items.Iphone14ProMax); //On navigation bar type in the search text box the item Iphone 14 Pro Max and search it
        resultPage.selectAProduct(locators.iphone14ProMax128GBPlata); //On the result page select the first item in this case an Iphone 14 Pro Max 128GB silver
        itemPage.getThePrice(); //On the item page get the price and log it in the console panel 

    })
    


})