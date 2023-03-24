
export class NavigationBar{

    searchProduct(item){
        cy.get('#twotabsearchtextbox').type(item);
        cy.get('#nav-search-submit-button').click();
    }

    



}

export const navigationBar = new NavigationBar();