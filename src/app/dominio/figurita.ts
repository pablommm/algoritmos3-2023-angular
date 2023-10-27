/* const VALORACION_PISO = 100
const VALOR_ON_FIRE = 1.2
const VALOR_ES_PAR = 1.1
const VALOR_NIVEL_IMPRESION = 0.85 */

export type FiguritaJSON = {
  nivelDeImpresion: string
  OnFire: boolean
  id: number
  seleccion: string
  altura: number
  posicion: string
  pais: string
  anioDebut: number
  peso: number
  numeroCamiseta: number
  cotizacionJugador: string
  fechaNacimiento: string
  nombre: string
  apellido: string
  valoracionFigurita: number
  /* esLider: boolean
  esPar: boolean
  imagen: string
  valoracionBase: number
  valoracionJugador: number */
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
    public OnFire?: boolean,
    public nivelDeImpresion: string = '',
    /* public esLider?: boolean,
    public esPar?: boolean,
    public imagen: string = '',
    public valoracionBase?: number,
    public valoracionJugador: number = 0, */
    public valoracionFigurita?: number
  ) {}

  static fromJson(figurita: object): Figurita {
    return Object.assign(new Figurita(), figurita)
  }

  /* valorOnFire(figurita: Figurita): number {
    return figurita.estaOnFire ? VALOR_ON_FIRE : 1
  }

  valorEsPar(figurita: Figurita): number {
    return figurita.esPar ? VALOR_ES_PAR : 1
  }

  valorNivelImpresion(figurita: Figurita): number {
    return figurita.nivelImpresion === 'medio' ||
      figurita.nivelImpresion === 'alto'
      ? VALOR_NIVEL_IMPRESION
      : 1
  }

  calcularValoracionBase(figurita: Figurita): number {
    return Math.round(
      VALORACION_PISO *
        this.valorOnFire(figurita) *
        this.valorEsPar(figurita) *
        this.valorNivelImpresion(figurita)
    )
  }

  calcularValoracionTotal(figurita: Figurita): number {
    return this.calcularValoracionBase(figurita) + figurita.valoracionJugador
  } */
}
