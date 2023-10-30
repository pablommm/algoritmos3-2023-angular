export type UsuarioJSON = {
  name: string
  apellido: string
  email: string
  fechaDeNacimiento: Date
  kmCercania: number
  calle: string
  altura: number
  posicionX: number
  posicionY: number
}

export class Usuario {
  constructor(
    public name: string = '',
    public apellido: string = '',
    public email: string = '',
    public fechaDeNacimiento: Date = new Date(),
    public kmCercania: number = 0,
    public calle: string = '',
    public altura: number = 0,
    public posicionX: number = 0,
    public posicionY: number = 0 //public distanciaMaximaCercania: number = 0,
  ) //public provincia: string = '',
  //public localidad: string = '',
  //public criterioCambio: string = ''
  {}

  static fromJson(usuario: object): Usuario {
    return Object.assign(new Usuario(), usuario)
  }
}
