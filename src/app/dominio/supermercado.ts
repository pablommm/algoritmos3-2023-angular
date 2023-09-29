export class Supermercado {
  constructor(
    public nombre: string = '',
    public direccion: string = '',
    public ubicacionGeografica: string = '',
    public distancia: string = '',
    public stock: number = 0,
    public precio: string = '',
  ) {}

  static fromJson(supermercado: Supermercado): Supermercado {
    return Object.assign(new Supermercado(), supermercado);
  }
}
