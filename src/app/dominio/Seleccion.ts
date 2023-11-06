export type SeleccionJSON = {
  pais: string
  confederacion: string
  copasDelMundo: number
  copasConfederacion: number
  id: number
}

export class Seleccion {
  constructor(
    public pais: string = "",
    public confederacion: string = "",
    public copasDelMundo: number = 0,
    public copasConfederacion: number = 0,
    public id: number = 0
  ) { }
  static fromJson(seleccion: object): Seleccion {
    console.log("pase por el dominio selecion")
    return Object.assign(new Seleccion(), seleccion)
  }

}
