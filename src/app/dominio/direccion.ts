export type DireccionJSON = {
  localidadesBuenosAires: string[]
  localidadesMendoza: string[]
  localidadesCordoba: string[]
  localidadVacia: string[]
  prov: string
  provincias: string
  localidades :string[]
  criterios :string[]
}

export class Direccion {
  constructor(
    public localidadesBuenosAires: string = '',
    public localidadesMendoza: string = '',
    public localidadesCordoba: string = '',
    public localidadVacia: string = '',
    public prov: string = '',
    public provincias: string = '',
    public localidades : string ='',
    public criterios :string=''
  ) {


    
  }

  static fromJson(direccion: DireccionJSON): Direccion {
    return Object.assign(new Direccion(), direccion)
  }
}
