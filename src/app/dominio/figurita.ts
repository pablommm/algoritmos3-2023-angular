const VALORACION_PISO = 100

export type FiguritaJSON = {
    Nombre: string,
    Apellido: string,
    FechaNacimiento: string,
    NumeroCamiseta: number,
    Seleccion: string,
    DebutSeleccion: number,
    Altura: number,
    Peso: number,
    Posicion: string,
    Pais: string,
    CotizacionJugador: string,
    esLider: boolean,
    estaOnFire: boolean,
    esPar: boolean,
    NivelImpresion: string,
    ValoracionBase?: number, 
  }

  
export class Figurita {

  constructor(public Nombre: string = '',
    public Apellido: string = '',
    public FechaNacimiento: string = '',
    public NumeroCamiseta?: number,
    public Seleccion: string = '',
    public DebutSeleccion?: number,
    public Altura?: number,
    public Peso?: number,
    public Posicion: string = '',
    public Pais: string = '',
    public CotizacionJugador: string = '',
    public esLider?: boolean,
    public estaOnFire?: boolean,
    public esPar?: boolean,
    public NivelImpresion: string = '',
    public ValoracionBase?: number, ) { }

    static fromJson(figuritaJSON: FiguritaJSON): Figurita {
      return Object.assign(new Figurita(), figuritaJSON)
  }
  

    calcularValoracionBase(figurita: Figurita) {
    let valoracionBase = VALORACION_PISO

      if (figurita.estaOnFire) {
        valoracionBase *= 1.2
      }
    
      if (figurita.esPar) {
        valoracionBase *= 1.1
      }
    
      if (figurita.NivelImpresion === "medio" || figurita.NivelImpresion === "alto") {
        valoracionBase *= 0.85
      }
    
      return valoracionBase
    }
  }

  
  
  
  
  
  