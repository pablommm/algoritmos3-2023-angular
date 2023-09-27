// figurita.ts

const VALORACION_PISO = 100;
const VALOR_ON_FIRE = 1.2;
const VALOR_ES_PAR = 1.1;
const VALOR_NIVEL_IMPRESION = 0.85;

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
  ) {}

  static fromJson(figurita: Figurita): Figurita {
    return Object.assign(new Figurita(), figurita);
  }
}

function calcularValoracionBase(figurita: Figurita): number {
  return (
    VALORACION_PISO *
    valorOnFire(figurita) *
    valorEsPar(figurita) *
    valorNivelImpresion(figurita)
  );
}

function valorOnFire(figurita: Figurita): number {
  return figurita.estaOnFire ? VALOR_ON_FIRE : 1;
}

function valorEsPar(figurita: Figurita): number {
  return figurita.esPar ? VALOR_ES_PAR : 1;
}

function valorNivelImpresion(figurita: Figurita): number {
  return figurita.nivelImpresion === 'medio' || figurita.nivelImpresion === 'alto'
    ? VALOR_NIVEL_IMPRESION
    : 1;
}

export { calcularValoracionBase, valorOnFire, valorEsPar, valorNivelImpresion };