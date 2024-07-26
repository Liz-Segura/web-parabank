Feature: Registro y logeo de ParaBank

  Scenario Outline: El usuario se registra
    Given el usuario ingresa a la pagina de ParaBank para registrarse
    When ingresa su informacion "<nombre>","<apellido>","<direccion>","<ciudad>","<departamento>","<codigoPostal>","<numeroCelular>","<seguroSocial>","<userName>","<password>","<confirm>"
    And hago click al boton registrar
    Then valido que me muestre mensaje exitoso

    Examples:
      | nombre | apellido | direccion         | ciudad | departamento | codigoPostal | numeroCelular | seguroSocial | userName         | password    | confirm     |
      | Sani   | Carrasco | calle ayacucho 81 | lima   | ñilma        |        25840 |     940449067 | esSalud      | saniCarrasco2006 | 2CarrSani56 | 2CarrSani56 |
 #     | Thalia | Suarez   | calle ancash 169 | ayacucho | ayacucho     |        20660 |     948501629 | EsSalud      | thaliaSuarez12 | sUaRezTha89 | sUaRezTha89 |
 #     | Maria  | Muñoz    | jiron tiahuanaco 158 | tarapoto | san martin   |        22160 |     960546210 | AFP INTEGRA  | mariAlejandra | 1mAria2 | 1mAria2 |

  Scenario Outline: El usuario ingresa con su cuenta creada
    When el usuario ingresa a la pagina de ParaBank para poder logearse
    And ingresa con la cuenta registrada "<userName>","<password>"
    And hago click al boton LogIn
    Then valido que me muestre la primera pagina de la web

    Examples:
      | userName       | password    |
      | mariAlejandra  |     1mAria2 |
      | thaliaSuarez12 | sUaRezTha89 |
      |    2CarrSani56 | 2CarrSani56 |
