export type PuntoDeVentaJSON = {
  nombre: string
  direccion: string
  ubicacionGeografica: string
  distancia: number
  stock: number
  precio: number
  tipo: string
}

export class PuntoDeVenta {
  constructor(
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeografica: string = '',
    public distancia: number = 0,
    public stock: number = 0,
    public precio: number = 0,
    public tipo: string = ''
  ) {}

  static fromJson(puntoDeVenta: PuntoDeVenta): PuntoDeVenta {
    return Object.assign(new PuntoDeVenta(), puntoDeVenta)
  }
}
