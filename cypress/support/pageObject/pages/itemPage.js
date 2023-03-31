
export class ItemPage{

    getThePrice(price){
        cy.get(price)
            .invoke('text')
            .then((text) => {
                cy.log(text);
            })
    }

    



}

export const itemPage = new ItemPage();