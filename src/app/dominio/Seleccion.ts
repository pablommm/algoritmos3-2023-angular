export type SeleccionJSON = {
    nombre: string
}
  
  export class Seleccion {
    constructor(
     public nombre :string =''    
     ) {}
        static fromJson(seleccion: SeleccionJSON): Seleccion {
            return Object.assign(new Seleccion(), seleccion)
          }
      
    }
  