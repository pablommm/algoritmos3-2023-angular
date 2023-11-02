export type FiguritaJSON = {
  idUsuario: number
  nombreUsuario: string
  figurita: Figurita
  /* nombre: string
  apellido: string
  fechaNacimiento: string
  numeroCamiseta: number
  seleccion: string
  anioDebut: number
  altura: number
  peso: number
  posicion: string
  pais: string
  cotizacionJugador: string
  onFire: boolean
  nivelDeImpresion: string
  id: number
  valoracionFigurita: number
  valoracionBase: number
  copasDelMundo: number
  copasConfederacion: number
  esLider: boolean
  numero: number
  imagen: string
  edad: number */
}

export class Figurita {
  constructor(
    public id?: number,
    public nombre: string = '',
    public apellido: string = '',
    public fechaNacimiento: string = '',
    public numeroCamiseta?: number,
    public seleccion: string = '',
    public anioDebut?: number,
    public altura?: number,
    public peso?: number,
    public posicion: string = '',
    public pais: string = '',
    public cotizacionJugador: string = '',
    public onFire?: boolean,
    public nivelDeImpresion: string = '',
    public esLider?: boolean,
    public imagen?: string,
    public edad?: number,
    public valoracionBase?: number,
    public valoracionFigurita?: number,
    public numero?: number,
    public copasDelMundo?: number,
    public copasConfederacion?: number
  ) {}

  static fromJson(figurita: object): Figurita {
    return Object.assign(new Figurita(), figurita)
  }

  lider() {
    return this.esLider ? 'Es Lider' : 'No es Lider'
  }

  valBase() {
    return this.valoracionBase?.toFixed(2)
  }
}
