
/* El principio de inversion de dependencias dice que si una clase depende de otras clases,
 esta relación deberia estar en las interfaces, pretendiendo reducir el acoplamiento entre
los diferentes componentes del software */

"use strict";

class GmailProveedor {
  constructor(usuario, dominio) {

    this.usuario =usuario;
    this.dominio = dominio;

  }
  enviarmensaje() {
  
    console.log ("el mensaje ha sido enviado");
  }
}
class Correo {
  constructor(texto) {
    this.texto = texto;
  }
   escribirmensaje() {
    console.log ("Hola, mundo");
  }
}

const mensaje = new Correo ("alejandra","gmail");
const recibirMensaje= new GmailProveedor (" matero", "hotmail");

