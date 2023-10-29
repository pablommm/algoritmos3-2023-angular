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
      `${REST_SERVER_URL}/FiguritasRepetidas/0`,
      { params: filtro.asHttpParams() }
    )

    const figuritaJSON = await lastValueFrom(figuritas$)
    console.log(figuritaJSON)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      Figurita.fromJson(figuritaJSON)
    )
  }

  async getFiguritaById(idFigurita: number) {
    const figurita$ = this.httpClient.get<FiguritaJSON>(
      `${REST_SERVER_URL}/DetalleFigurita/${idFigurita}`
    )

    const figuritaJSON = await lastValueFrom(figurita$)

    return Figurita.fromJson(figuritaJSON)
  }

  //Falta usuarioLogin para poder funcionar

  /* async todasLasFiguritasRepetidas(filtro: FiltroFiguritas, id: number) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/FiguritasRepetidas/${id}`
    )

    const figuritaJSON = await lastValueFrom(figuritas$)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      Figurita.fromJson(figuritaJSON)
    )
  }

  async todasLasFiguritasFaltantes(filtro: FiltroFiguritas, id: number) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/FiguritasFaltantes/${id}`
    )

    const figuritaJSON = await lastValueFrom(figuritas$)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      Figurita.fromJson(figuritaJSON)
    )
  } */
}
