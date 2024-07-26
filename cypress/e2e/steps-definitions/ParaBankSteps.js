import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { paraBankPage } from "../../pages/ParaBankPage";

Given('el usuario ingresa a la pagina de ParaBank para registrarse',()=>{
   paraBankPage.ingresarURL();
   paraBankPage.clickBotonRegistrar();
});

When('ingresa su informacion {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}',(nombre,apellido,direccion,ciudad,departamento,codigoPostal,numeroCelular,seguroSocial,userName,password,confirm)=>{
    paraBankPage.registrarUsuario(nombre,apellido,direccion,ciudad,departamento,codigoPostal,numeroCelular,seguroSocial,userName,password,confirm);
});

And('hago click al boton registrar',()=>{
    paraBankPage.clickBotonRegistroExitoso();
});

Then('valido que me muestre mensaje exitoso',()=>{
    paraBankPage.validarRegistroExitoso();
});

When('el usuario ingresa a la pagina de ParaBank para poder logearse',()=>{
    paraBankPage.ingresarURL();
});

And('ingresa con la cuenta registrada {string},{string}',(userName,password)=>{
    paraBankPage.ingresoCuentaCreada(userName,password);
});

And('hago click al boton LogIn',()=>{
    paraBankPage.clickBotonLogin();
});

Then('valido que me muestre la primera pagina de la web',()=>{
    paraBankPage.validoIngresoWeb();
});


/*
When('',()=>{

})*/
