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

        cy.get('input[name=id]').should('have.value', '3');
        cy.get('input[name=category]').should('have.value', 'Sueldo');
        cy.get('input[name=amount]').should('have.value', '50000');
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

    it('Deberia poder crear un nuevo ingreso con la fecha correcta', () => {
        cy.visit('/income');

        cy.get('input[name=description]').type('Expensas');
        cy.get('input[name=date]').type('2021-04-28');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
       
        const stub = cy.stub();
        cy.on('window:alert', stub);

        cy.reload();
        cy.get('body > main > div > div > div:nth-child(2) > div > div.card-content > div > ul > li:nth-child(5) > div > div.level-left > div:nth-child(2) > div > p:nth-child(2)').should(($date) => {
            expect($date.text().trim()).equal('2021-4-27');
          });
        
        
    });
});
