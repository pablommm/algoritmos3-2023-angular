import { valoracionTotal } from 'src/app/dominio/figurita'
import { Figurita} from '../dominio/figurita'
import { Injectable } from '@angular/core'
import { figuritas } from '../mocks/listaFiguritas'

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor() {}

  todasLasFiguritas(): Figurita[] {
    try {
      const figuritasConValoracionBase = figuritas.map((figuritaJSON) => {
        const figurita = Figurita.fromJson(figuritaJSON)
        figurita.valoracionTotal = valoracionTotal(figurita) 
        return figurita
      })
      return figuritasConValoracionBase
    } catch (error) {
      console.error('Error al cargar las figuritas', error)
      return [] 
    }
  }
}
