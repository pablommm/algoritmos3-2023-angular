export type DireccionJSON = {
  provincia: string
  localidadesBuenosAires: string[]
  localidadesMendoza: string[]
  localidadesCordoba: string[]
}

export class Direccion {
  constructor(
    public provincia: string = '',
    public localidadesBuenosAires: string = '',
    public localidadesMendoza: string = '',
    public localidadesCordoba: string = ''
  ) {}

  static fromJson(direccion: object): Direccion {
    return Object.assign(new Direccion(), direccion)
  }
}
