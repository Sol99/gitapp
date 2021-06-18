describe('About Test', () => {
    
    it('Deberia permitir acceder a /about', () => {
        cy.visit('/about');
        cy.url().should('include', '/about')
    });

    it('Deberia poder acceder a /about desde boton', () => {
        cy.visit('/income');

        cy.contains('Nosotros').click();
        cy.url().should('include', '/about')

    });

    it('Deberia tener clase titulo-nosotros', () => {
        cy.visit('/about');

        cy.get('[id=titulo-about]').should('have.class', 'titulo-nosotros');
    });

    it('Deberia tener clase titulo-integrantes', () => {
        cy.visit('/about');

        cy.get('[id=integrantes-about]').should('have.class', 'titulo-integrantes');
    });

    it('Deberia existir un enlace a la cuenta personal de github', () => {
        cy.visit('/about');

        cy.get('[class=integrante]')
            .contains('Guasch Vives, Lautaro')
            .invoke('attr', 'href')
            .should('contain', 'https://github.com/LautaroGuasch')
    });

});
