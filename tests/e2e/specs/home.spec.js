describe('Home Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia tener de titulo Gitapp', () => {
        cy.visit('/');
        cy.title().should('eq', 'Gitapp');
    });

    it('Deberia mostrar los ultimos 5 movimientos', () => {
        cy.visit('/');

        cy.get('[data-testid=last-movements]').contains('Últimos movimientos');
        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia poder navegar a income', () => {
        cy.visit('/');

        cy.get('a[href*=income]')
            .contains('Ingresos')
            .click()
            .title()
            .should('eq', 'Gitapp - Ingresos')
    });

    //Verifica que se utilice la clase card-header-title
    it('Deberia tener clase card-header-title', () => {
        cy.visit('/');

        cy.get('[id=titulo1]').should('have.class', 'card-header-title');
        cy.get('[id=titulo2]').should('have.class', 'card-header-title');
        cy.get('[id=titulo3]').should('have.class', 'card-header-title');
    });

    //Verifica que se utilice la clase card-header
    it('Deberia tener clase card-header', () => {
        cy.visit('/');

        cy.get('[id=div-titulo1]').should('have.class', 'card-header');
        cy.get('[id=div-titulo2]').should('have.class', 'card-header');
        cy.get('[id=div-titulo3]').should('have.class', 'card-header');
    });

    it('Deberia aparecer el modal de informacion', () => {
        cy.visit('/');
        cy.get('[id=button-modal]')
        .click();
        cy.get('[class]').should('have.class', 'modal-header');
      });

    it('El primer boton de info se tiene que desplegar', () => {
        cy.visit('/');        

        cy.contains('info').invoke('show').click()
        .next()
        .should('have.text', 'Muestra los gastos del mes')
        //de esta manera sabemos que luego de hacer click tendria que aparecer el texto de "Muestra los gastos del mes"
        //como en cypress no hay una funcion de hover, realizamos el click()
    });

    it('El segundo boton de info se tiene que desplegar', () => {
        cy.get('[id=div-titulo3]')
                .contains('info').click()
                .next()
                .should('have.text', 'Muestra el balance por mes')

        //de esta manera sabemos que luego de hacer click tendria que aparecer el texto de "Muestra el balance por mes"
        //como en cypress no hay una funcion de hover, realizamos el click()
    });
});
