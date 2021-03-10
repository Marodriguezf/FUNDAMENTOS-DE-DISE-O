
/*Se enfoca en definir determinados métodos a través de una serie de interfaces que
 permitan implementar las clases definidas, en este caso cada clase tendrá una 
 responsabilidad */

class Celulares {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
    obtenerMarca() {
     
      return this.marca;
    }
    obtenerModelo() {
      return this.modelo;
    }
    guardarMarca(marca) {
      this.marca = marca;
    }
    guardarModelo(modelo) {
      this.modelo = modelo;
    }
  }
  const Smarthphone = (clasePadre) => {
    return (
      class extends clasePadre {
        constructor(marca, modelo){
          super(marca, modelo);
        }
        guardarTamanioPantalla(tamanio) {
          this.tamaño = tamaño;
        }
      
        obtenerTamanioPantalla() {
          return this.tamanio;
        }
      }
    )
  }
  class Iphone extends Smarthphone(Celulares) {
    constructor (marca,modelo){
      super(marca,modelo);
    }
    

  }

  const pantallaTactil = new Celulares ( "iphone","x10");
  const pantallaPlegable = new Celulares ("samsung", "SG20");

  const tamaño = new Iphone ("7 pulgadas");