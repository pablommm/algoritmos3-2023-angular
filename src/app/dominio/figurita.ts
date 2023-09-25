interface Figurita {
    Nombre: string;
    Apellido: string;
    FechaNacimiento: string;
    NumeroCamiseta: number;
    Seleccion: string;
    DebutSeleccion: number;
    Altura: number;
    Peso: number;
    Posicion: string;
    Pais: string;
    CotizacionJugador: string;
    esLider: boolean;
    estaOnFire: boolean;
    esPar: boolean;
    NivelImpresion: string;
    ValoracionBase?: number; // Este campo almacenará la valoración base
  }

  
/* export class Figuritas {

    calcularValoracionBase(figurita: Figurita) {
      let valoracionBase = 100;
    
      if (figurita.estaOnFire) {
        valoracionBase *= 1.2;
      }
    
      if (figurita.esPar) {
        valoracionBase *= 1.1;
      }
    
      if (figurita["Nivel de Impresión"] === "medio" || figurita["Nivel de Impresión"] === "alto") {
        valoracionBase *= 0.85;
      }
    
      return valoracionBase;
    }
  } */

  
  
  
  
  
  