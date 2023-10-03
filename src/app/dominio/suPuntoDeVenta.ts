export class SuPuntoDeVenta {
  constructor(
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeografica: string = '',
    public distancia: string = '',
    public stock: number = 0,
    public precio: string = '',
    public tipo: string = '',
  ) {}

  static fromJson(suPuntoDeVenta: SuPuntoDeVenta): SuPuntoDeVenta {
    return Object.assign(new SuPuntoDeVenta(), suPuntoDeVenta)
  }

  
}
