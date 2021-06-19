describe('Ingresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un ingreso', () => {
        cy.visit('/income');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '14');
        cy.get('input[name=category]').should('have.value', 'Plazo Fijo');
        cy.get('input[name=amount]').should('have.value', '11000');
    });

    it('Deberia poder crear un nuevo ingreso', () => {
        cy.visit('/income');

        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 4);
    });

    it('Deberia poder validar el formulario', () => {
        cy.visit('/income');
        cy.get('[id=descripcion-validacion]').should('have.attr', 'required');
        cy.get('[id=fecha-validacion]').should('have.attr', 'required');
        cy.get('[id=categoria-validacion]').should('have.attr', 'required');
        cy.get('[id=monto-validacion]').should('have.attr', 'required');


    });

    //agrega el test para el caracter -
    
    it('Verifica que no se permita escribir caracter -', () => {
        cy.visit('/income');
        cy.get('input[name=description]').type('Bono salarial');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('-10000');
        cy.get('input[name=amount]').should('have.value', '10000');  
    });

    //agrega el test para el caracter + 

    it('Verifica que no se permita escribir caracter +', () => {
        cy.visit('/income');
        cy.get('input[name=description]').type('Bono salarial');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('+10000');
        cy.get('input[name=amount]').should('have.value', '10000');  
    });
    it('Los movimientos deberian contener la clase que asigna el caracter +', () => {
        cy.visit('/income');
        //creamos un movimiento para verificar que se le aplique la clase
        cy.get('input[name=description]').type('Bono salarial');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('10000');
        cy.contains('Guardar').click();

        cy.get('p[id=valor]')
            .contains('10.000')
            .should('have.class', 'ingreso')
    });
});
