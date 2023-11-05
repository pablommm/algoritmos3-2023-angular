export type SeleccionJSON = {
  nombre: string
}

export class Seleccion {
  constructor(
    public nombre: string = ''
  ) { }
  static fromJson(seleccion: SeleccionJSON): Seleccion {
    console.log("pase por el dominio selecion")
    return Object.assign(new Seleccion(), seleccion)
  }

}
