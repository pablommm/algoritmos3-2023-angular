const VALORACION_PISO = 100
const VALOR_ON_FIRE = 1.2
const VALOR_ES_PAR = 1.1
const VALOR_NIVEL_IMPRESION = 0.85

export class Figurita {
  constructor(
    public nombre: string = '',
    public apellido: string = '',
    public fechaNacimiento: string = '',
    public numeroCamiseta?: number,
    public seleccion: string = '',
    public anioDebutSeleccion?: number,
    public altura?: number,
    public peso?: number,
    public posicion: string = '',
    public pais: string = '',
    public cotizacionJugador: string = '',
    public esLider?: boolean,
    public estaOnFire?: boolean,
    public esPar?: boolean,
    public nivelImpresion: string = '',
    public imagen: string = '',
    public valoracionBase?: number,
    public valoracionJugador: number = 0,
    public valoracionTotal?: number
  ) {}

  static fromJson(figurita: object): Figurita {
    return Object.assign(new Figurita(), figurita)
  }

  valorOnFire(figurita: Figurita): number {
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
  }
}
