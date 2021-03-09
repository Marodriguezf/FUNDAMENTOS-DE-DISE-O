/* una clase debe estar abierta para poder extenderse, pero cerrada a modificaciones */

"use strict";
class Nevera {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca; 

    }

    Productos = ["Leche", "Jugos", "Helado"];
    get Productos() {
        return this.Productos;
    }
    set Productos(value) {
        this.Productos = value;
    }

existeProducto(producto) {
/*index0f devuelve la posicion del producto en el array, si la posición es -1 significa
 que no existe el producto*/
 
    return this.Productos.indexOf(producto) !== -1;
 }


/* Se añade una responsabilidad mas a la clase sin modificar su funcionalidad principal */

 agregarProducto(producto) 
 {  
     setproducto(producto,Object)

     this.Productos.push(producto);
 }

}
const neveconCocina = new Nevera ('Gris','LG');