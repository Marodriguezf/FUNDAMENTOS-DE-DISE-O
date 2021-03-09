/*El principio de responsabilidad unica indica que  una clase debe centrarse en
 una unica responsabilidad, es decir que sus metodos tengan alta cohesión.*/


"use strict";

class Televisor {
    constructor(marca, modelo, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        console.log(`El televisor ${this.marca} se ha encendido`);
    }
}

const tvSala = new Televisor('Samsung', 'Gray', 55);
