

export class HomePage {

    clickOnTodoLeftMenu(todoMenu){
        cy.get(todoMenu).click()
    }

}

export const homePage = new HomePage();