export class PuntoDeVenta {
  constructor(
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeografica: string = '',
    public distancia: string = '',
    public stock: number = 0,
    public precio: string = '',
    public tipo: string = '',
  ) {}

  static fromJson(puntoDeVenta: PuntoDeVenta): PuntoDeVenta {
    return Object.assign(new PuntoDeVenta(), puntoDeVenta)
  }

  
}
