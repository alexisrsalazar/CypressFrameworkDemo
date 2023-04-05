//<reference types="Cypress" />
import { navigationBar } from "../support/pageObject/pages/navigationBar.js";
import { resultPage } from "../support/pageObject/pages/resultPage.js";
import { itemPage } from "../support/pageObject/pages/itemPage.js";
import { homePage } from "../support/pageObject/pages/homePage.js";
const items = require('../support/pageObject/testData/products.json');
const locators = require('../support/pageObject/testData/locators.json');
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const deps = require('../fixtures/BuscarPorDepartamento.json')
const prog = require('../fixtures/ProgramayFuncionalidades.json')

Given("I go to Amazon.com", () => {
    cy.goToAmazon();
})
When("I click on the left Menu", () => {
    homePage.clickOnTodoLeftMenu(locators.todoMenu)
})
const listElement = [];
Then("I should see different elements on Buscar Por Categoría and Programas Y Características", () => {

    cy.get('.hmenu-visible > :nth-child(n+14):nth-child(-n+17) > .hmenu-item')
        .then(($items) => {
            $items.each((index, element) => {
                cy.wrap(element).should('have.text', deps.departments[index]);
            });
        });

    cy.get('.hmenu-visible > :nth-child(n+22):nth-child(-n+25) > .hmenu-item')
        .each(($items) => {
            listElement.push($items.text().trim());
        })
        .then(() => {
            listElement.forEach((program) => {
                expect(prog.programs).to.include(program);
            })
        })

});
Then("I should NOT see elements from testing stage", () => {
    cy.get('.hmenu-visible > :nth-child(n+14):nth-child(-n+17) > .hmenu-item')
        .each(($items) => {
            listElement.push($items.text().trim());
        })
        .then(() => {
            listElement.forEach((element) => {
                expect(deps.nonIncludeElements).not.to.include(element)
            })

        })
})



