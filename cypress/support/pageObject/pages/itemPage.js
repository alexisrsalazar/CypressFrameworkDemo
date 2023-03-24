
export class ItemPage{

    getThePrice(){
        cy.get('.a-spacing-none > .a-price > [aria-hidden="true"]')
            .invoke('text')
            .then((text) => {
                cy.log(text);
            })
    }

    



}

export const itemPage = new ItemPage();