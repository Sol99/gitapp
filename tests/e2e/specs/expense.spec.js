describe('Egresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un egreso', () => {
        cy.visit('/expense');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '19');
        cy.get('input[name=category]').should('have.value', 'Supermercado');
        cy.get('input[name=amount]').should('have.value', '1498');
    });

    it('Deberia poder crear un nuevo egreso', () => {
        cy.visit('/expense');

        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    //agrega el test para el caracter -

    it('Verifica que no se permita escribir caracter -', () => {
        cy.visit('/expense');
        cy.get('input[name=description]').type('Ropa');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('-10000');
        cy.get('input[name=amount]').should('have.value', '10000');  
    });

    //agrega el test para el caracter +

    it('Verifica que no se permita escribir caracter +', () => {
        cy.visit('/expense');
        cy.get('input[name=description]').type('Bono salarial');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('+10000');
        cy.get('input[name=amount]').should('have.value', '10000');  
    });
    it('Los movimientos deberian contener la clase que asigna el caracter -', () => {
        cy.visit('/expense');
        //creamos un movimiento para verificar que se le aplique la clase
        cy.get('input[name=description]').type('Supermercado');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Gasto');
        cy.get('input[name=amount]').type('18000');
        cy.contains('Guardar').click();

        cy.get('p[id=valor]')
            .should('have.class', 'egreso');
    });

   
    it('El boton de Gitapp me deberia llevar al inicio', () => {
        cy.visit('/expense');        

        cy.contains('Gitapp').click()
        .title()
        .should('eq', 'Gitapp')
        cy.get('[class=container]').should('have.id', 'resumen'); 
        //esta clase con id resumen solo esta en el home
        //verificando que se encuentra esa clase compruebo que estoy en el home     
    });
});
   