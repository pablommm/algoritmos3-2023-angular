export type DireccionJSON = {
  localidadesBuenosAires: string[]
  localidadesMendoza: string[]
  localidadesCordoba: string[]
  localidadVacia: string[]
  prov: string
  provincias: string
}

export class Direccion {
  constructor(
    public localidadesBuenosAires: string = '',
    public localidadesMendoza: string = '',
    public localidadesCordoba: string = '',
    public localidadVacia: string = '',
    public prov: string = '',
    public provincias: string = ''
  ) {}

  static fromJson(direccion: DireccionJSON): Direccion {
    return Object.assign(new Direccion(), direccion)
  }
}
