class ParaBankPage{

elements = {
    btnRegistrar:() => cy.get('p:nth-child(3) > a'),
    btnRegistroExitoso: () => cy.get('td[colspan="2"] input[type="submit"].button[value="Register"]')


}

ingresarURL(){
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
}

clickBotonRegistrar(){
    this.elements.btnRegistrar().click();
}

registrarUsuario(nombre,apellido,direccion,ciudad,departamento,codigoPostal,numeroCelular,seguroSocial,userName,password,confirm){
    cy.get('#customer\\.firstName').type(nombre,{delay: 200});
    cy.get('#customer\\.lastName').type(apellido,{delay: 200});
    cy.get('#customer\\.address\\.street').type(direccion,{delay: 200});
    cy.get('#customer\\.address\\.city').type(ciudad,{delay: 200});
    cy.get('#customer\\.address\\.state').type(departamento,{delay: 200});
    cy.get('#customer\\.address\\.zipCode').type(codigoPostal,{delay: 200});
    cy.get('#customer\\.phoneNumber').type(numeroCelular,{delay: 200});
    cy.get('#customer\\.ssn').type(seguroSocial,{delay: 200});
    cy.get('#customer\\.username').type(userName,{delay: 200});
    cy.get('#customer\\.password').type(password,{delay: 200});
    cy.get('input#repeatedPassword').type(confirm,{delay: 200});
}

clickBotonRegistroExitoso(){
    this.elements.btnRegistroExitoso().click();
}

validarRegistroExitoso(){
    cy.get('#rightPanel p')
    .should('be.visible') // Asegúrate de que el <p> sea visible
    .should('contain.text', 'Your account was created successfully. You are now logged in.'); // Verifica el texto
    cy.log('Se encontró el mensaje: Your account was created successfully. You are now logged in.')
}

ingresoCuentaCreada(userName,password){
    cy.get('input[name="username"]').should('be.visible').type(userName,{delay: 200});
    cy.get('input[name="password"]').type(password,{delay: 200});
}

clickBotonLogin(){
    cy.get('input[type="submit"][value="Log In"]')
    .should('be.visible')
    .click(); 
}

validoIngresoWeb(){
    cy.get('#showOverview > .title').should('be.visible')
    cy.log('Pude logearme :)')
}





}

export const paraBankPage = new ParaBankPage();