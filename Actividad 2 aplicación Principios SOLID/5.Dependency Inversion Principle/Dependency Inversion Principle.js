
/* El principio de inversion de dependencias dice que si una clase depende de otras clases,
 esta relación deberia estar en las interfaces, pretendiendo reducir el acoplamiento entre
los diferentes componentes del software */

"use strict";

class GmailProveedor {
  constructor(usuario, dominio) {


    this.usuario =usuario;
    this.dominio = dominio;
    this.provider = gmail;
  }
  enviar(mensaje) {
    this.provider.sendAsText(mensaje);
  }
}
class Correo {
  constructor(proveedor) {
    this.proveedor = proveedor;
  }
  enviar(mensaje) {
    this.proveedor.send(mensaje);
  }
}
var gmail = new GmailProveedor();
var correo = new Correo(gmail);
correo.enviar('hola!');