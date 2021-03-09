/* Principio de substitución indica que las clases derivadas deben poder sustituirse por sus
 clases base,es decir que los objetos podrían ser reemplazados por sus subtipos sin alterar 
 el funcionamiento correcto del sistema. */
"use estrict";

 class Paralelogramo {
  constructor(ancho, alto) {
    this.establecerAncho(ancho);
    this.establecerAlto(alto);
  }
  establecerAncho(ancho) {
    this.ancho = ancho;
  }
  establecerAlto(alto) {
    this.alto = alto;
  }
  calcularArea() {
    return this.ancho * this.alto;
  }
}
class Rectangulo extends Paralelogramo {
  constructor(ancho, alto) {
    super(ancho, alto);
  }
}
class Cuadrado extends Paralelogramo {
  constructor(lado) {
    super(lado, lado);
  }
}