describe('Login – Bohemia App', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Debe mostrar el logo y el mensaje de ingreso', () => {
    cy.get('.logo-bohemia img').should('have.attr', 'src').and('include', 'logo-bohemia.jpg');
    cy.contains('Ingresa tus credenciales').should('exist');
  });

  it('Debe tener campos para usuario y contraseña', () => {
    cy.get('ion-input[name="usuario"]').should('exist');
    cy.get('ion-input[name="contrasena"]').should('exist');
  });

  it('Debe validar que el usuario es obligatorio', () => {
    cy.get('ion-input[name="usuario"] input').focus();
    cy.get('ion-input[name="contrasena"] input').focus();
    cy.get('ion-input[name="usuario"] input').blur({ force: true });
    cy.contains('El usuario es obligatorio.').should('be.visible');
  });

  it('Debe validar que la contraseña es obligatoria', () => {
    cy.get('ion-input[name="contrasena"] input').focus();
    cy.get('ion-input[name="usuario"] input').focus();
    cy.get('ion-input[name="contrasena"] input').blur({ force: true });
    cy.contains('La contraseña es obligatoria.').should('be.visible');
  });

  it('Debe deshabilitar el botón si el formulario es inválido', () => {
    cy.get('ion-button[type="submit"]')
      .shadow()
      .find('button')
      .should('be.disabled');
  });


  // EXTRA: Test de login exitoso (ajusta el usuario/contraseña válidos si tienes lógica)
  it('Permite login con credenciales válidas', () => {
    cy.get('ion-input[name="usuario"] input').type('Fabian');
    cy.get('ion-input[name="contrasena"] input').type('Clave123');
    cy.get('ion-button[type="submit"]').should('not.be.disabled').click();
    // Verifica que navega a la página de datos (ajusta según tu routing)
    cy.url().should('include', '/datos');
  });

});
