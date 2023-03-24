



export class ResultPage{

    selectAProduct(product){
        cy.get(product).click();
    }

    



}

export const resultPage = new ResultPage();