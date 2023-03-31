



export class ResultPage{

    selectAProduct(product){
        cy.get(product).click();
    }

    selectTheFirstProduct(product){
        cy.get(product)
            .first()
            .click()
    }

}

export const resultPage = new ResultPage();