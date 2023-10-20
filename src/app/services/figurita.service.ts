/* import { valoracionTotal } from 'src/app/dominio/figurita' */
import { Figurita } from '../dominio/figurita'
import { Injectable } from '@angular/core'
import { figuritas } from '../mocks/figuritas'

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor() {}

  todasLasFiguritas(/* toSearch: string */): Figurita[] {
    try {
      const figuritasConValoracionBase = figuritas.map((figuritaJSON) => {
        const figurita = Figurita.fromJson(figuritaJSON)
        figurita.valoracionTotal = figurita.calcularValoracionTotal(figurita)
        return figurita
      })
      return figuritasConValoracionBase
    } catch (error) {
      console.error('Error al cargar las figuritas', error)
      return []
    }
  }

  /* async getAll(toSearch = '') {
    console.info('PATH: ', this.pathUrl + '/search/' + toSearch)
    const activities$ = this.http.get<ActivityDTO[]>(
      this.pathUrl + '/search/' + toSearch
    )
    const activities = await lastValueFrom(activities$)
    return activities.map((activityDTO) => activityFromJSON(activityDTO))
  } */
}
