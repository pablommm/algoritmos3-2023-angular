/* import { valoracionTotal } from 'src/app/dominio/figurita' */
import { Figurita, FiguritaJSON } from '../dominio/figurita'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { FiltroFiguritas } from '../dominio/filtro'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor(private httpClient: HttpClient) {}

  async todasLasFiguritas(filtro: FiltroFiguritas) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/Figuritas/`,
      { params: filtro.asHttpParams() }
    )

    const figuritaJSON = await lastValueFrom(figuritas$)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      Figurita.fromJson(figuritaJSON)
    )
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
