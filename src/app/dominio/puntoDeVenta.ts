/* export type UbicacionGeografica = {
  x: string
  y: string
} */

export type PuntoDeVentaJSON = {
  id: number
  nombre: string
  direccion: string
  ubicacionGeograficaX: number
  ubicacionGeograficaY: number
  distancia: number
  stockDeSobres: number
  importeACobrar: number
  tipo: string
}

export class PuntoDeVenta {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeograficaX: number = 0,
    public ubicacionGeograficaY: number = 0,
    /* public ubicacionGeografica: string = '', */
    public distancia: number = 0,
    public stockDeSobres: number = 0,
    public importeACobrar: number = 0,
    public tipo: string = ''
  ) {}

  /* static fromJson(puntoDeVentaJSON: PuntoDeVentaJSON): PuntoDeVenta {
    console.log(puntoDeVentaJSON)
    return Object.assign(new PuntoDeVenta(), puntoDeVentaJSON, {
      ubicacionGeografica: `(${puntoDeVentaJSON.ubicacionGeografica.x},${puntoDeVentaJSON.ubicacionGeografica.y})`
    })
  } */

  static fromJson(puntoDeVentaJSON: PuntoDeVentaJSON): PuntoDeVenta {
    console.log(puntoDeVentaJSON)
    return Object.assign(new PuntoDeVenta(), puntoDeVentaJSON)
  }

  geolocalizacion() {
    return `(${this.ubicacionGeograficaX}, ${this.ubicacionGeograficaY})`
  }
}
