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

export class FiguritaUsuario {
  constructor(
    public idUsuario?: number,
    public nombreUsuario?: string,
    public figurita: Figurita = new Figurita()
  ) {}

  static fromJson(figurita: object): FiguritaUsuario {
    return Object.assign(new FiguritaUsuario(), figurita)
  }

  getId() {
    return this.figurita.id
  }

  getNombre() {
    return this.figurita.nombre
  }

  getApellido() {
    return this.figurita.apellido
  }

  getFechaNacimiento() {
    return this.figurita.fechaNacimiento
  }

  getNumeroCamiseta() {
    return this.figurita.numeroCamiseta
  }

  getSeleccion() {
    return this.figurita.seleccion
  }

  getAnioDebut() {
    return this.figurita.anioDebut
  }

  getAltura() {
    return this.figurita.altura
  }

  getPeso() {
    return this.figurita.peso
  }

  getPosicion() {
    return this.figurita.posicion
  }

  getPais() {
    return this.figurita.pais
  }

  getCotizacionJugador() {
    return this.figurita.cotizacionJugador
  }

  getOnFire() {
    return this.figurita.onFire
  }

  getNivelDeImpresion() {
    return this.figurita.nivelDeImpresion
  }

  getImagen() {
    return this.figurita.imagen
  }

  getEdad() {
    return this.figurita.edad
  }

  getValoracionBase() {
    return this.figurita.valoracionBase?.toFixed(2)
  }

  getValoracionFigurita() {
    return this.figurita.valoracionFigurita
  }

  getNumero() {
    return this.figurita.numero
  }

  getCopasDelMundo() {
    return this.figurita.copasDelMundo
  }

  getCopasConfederacion() {
    return this.figurita.copasConfederacion
  }

  getEsLider() {
    return this.figurita.esLider ? 'Es Lider' : 'No es Lider'
  }
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
}
