type UbicacionGeografica = {
  x: string
  y: string
}

export type PuntoDeVentaJSON = {
  id: number
  nombre: string
  direccion: string
  ubicacionGeografica: UbicacionGeografica
  distancia: number
  stockDeSobres: number
  precio: number
  tipo: string
}

export class PuntoDeVenta {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeografica: string = '',
    public distancia: number = 0,
    public stockDeSobres: number = 0,
    public precio: number = 0,
    public tipo: string = ''
  ) {}

  static fromJson(puntoDeVentaJSON: PuntoDeVentaJSON): PuntoDeVenta {
    console.log(puntoDeVentaJSON)
    return Object.assign(new PuntoDeVenta(), puntoDeVentaJSON, {
      ubicacionGeografica: `(${puntoDeVentaJSON.ubicacionGeografica.x},${puntoDeVentaJSON.ubicacionGeografica.y})`
    })
  }
}
