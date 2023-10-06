export class Usuario {
  constructor(
    public nombre: string = '',
    public apellido: string = '',
    public email: string = '',
    public fechaDeNacimiento: Date = new Date(),
    public provincia: string = '',
    public localidad: string = '',
    public calle: string = '',
    public altura: number = 0,
    public posicionX: number = 0,
    public posicionY: number = 0,
    public distanciaMaximaCercania: number = 0,
    public criterioCambio: string = ''
  ) {}

  static fromJson(usuario: object): Usuario {
    return Object.assign(new Usuario(), usuario)
  }

  getFormattedFechaDeNacimiento(): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }
    return this.fechaDeNacimiento.toLocaleDateString('es-AR', options)
  }
}
