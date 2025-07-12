describe('Flujo E2E Completo – Bohemia App', () => {
  it('Permite login, ingreso de datos, confirmación y muestra mensaje final', () => {
    // LOGIN
    cy.visit('/login');
    cy.get('ion-input[name="usuario"] input').type('Fabian');
    cy.get('ion-input[name="contrasena"] input').type('Clave123');
    cy.get('ion-button[type="submit"]').should('not.be.disabled').click();


    cy.url().should('include', '/datos');
    cy.contains('Completa tus datos').should('be.visible');
    cy.get('ion-input[formcontrolname="nombreNovia"] input').type('María Prueba');
    cy.get('ion-input[formcontrolname="email"] input').type('maria@prueba.com');


    cy.get('input[formcontrolname="fechaMatrimonio"]').type('2025-12-10', { force: true });



    cy.get('ion-select[formcontrolname="tocado"]').click();
    cy.contains('.alert-radio-label', 'Tocado Floral').click(); //
    cy.contains('button', 'OK').click();




    cy.get('ion-toggle[formcontrolname="usarAros"]').click();
    cy.get('ion-select[formcontrolname="estiloAros"]').click();
    cy.contains('.alert-radio-label', 'Perlas').click();
    cy.contains('button', 'OK').click();



    cy.get('ion-button[type="submit"]').contains('Guardar y continuar').click();

    //INNACECIBLE XQ CORRESPONDE A SQL , DEJADO PARA DEMOSTRAR ERROR
    cy.url().should('include', '/mis-reservas');
    cy.contains('¡Hola, María Prueba!').should('be.visible');
    cy.get('ion-button').contains('Confirmar tu pedido').click();

  });
});
