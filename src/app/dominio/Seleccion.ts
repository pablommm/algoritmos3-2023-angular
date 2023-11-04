export type SeleccionJSON = {
    nombre: string
}
  
  export class Seleccion {
    constructor(
     

    ) {}
  
        static fromJson(seleccion: SeleccionJSON): Seleccion {
            return Object.assign(new Seleccion(), seleccion)
          }
      
    }
  