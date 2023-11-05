/* import { valoracionTotal } from 'src/app/dominio/figurita' */
import { FiguritaJSON, FiguritaUsuario } from '../dominio/figurita'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { FiltroFiguritas } from '../dominio/filtro'
import { Observable, lastValueFrom } from 'rxjs'
import { UsuarioLogin } from '../dominio/usuarioLogin'

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor(private httpClient: HttpClient) { }
  async todasLasFiguritas(filtro: FiltroFiguritas) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/FiguritasRepetidas/${UsuarioLogin.getInstance().id}`,
      { params: filtro.asHttpParams() }
    )

    return await this.awaitReturnFiguritas(figuritas$)
  }

  async figuritasFaltantesUsuario() {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/PerfilUsuario/FiguritasFaltantes/${UsuarioLogin.getInstance().id
      }`
    )

    return await this.awaitReturnFiguritas(figuritas$)
  }

  async figuritasRepetidasUsuario() {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/PerfilUsuario/FiguritasRepetidas/${UsuarioLogin.getInstance().id
      }`
    )

    return await this.awaitReturnFiguritas(figuritas$)
  }

  async getFiguritaById(idFigurita: number) {
    const figurita$ = this.httpClient.get<FiguritaJSON>(
      `${REST_SERVER_URL}/DetalleFigurita/${idFigurita}`
    )

    const figuritaJSON = await lastValueFrom(figurita$)

    return FiguritaUsuario.fromJson(figuritaJSON)
  }

  private async awaitReturnFiguritas(figuritas$: Observable<FiguritaJSON[]>) {
    const figuritaJSON = await lastValueFrom(figuritas$)
    console.log(figuritaJSON)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      FiguritaUsuario.fromJson(figuritaJSON)
    )
  }

  /* async todasLasFiguritaDelAlbum() {
    return this.awaitReturnFiguritas(
      this.httpClient.get<FiguritaJSON[]>(
        `${REST_SERVER_URL}/BusquedaFiguritasPerfil/`
      )
    )
  } */

  async todasLasFiguritaDelAlbum(filtro: FiltroFiguritas) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/BusquedaFiguritasPerfil/`,
      { params: filtro.asHttpParams() }
    )
    return await this.awaitReturnFiguritas(figuritas$)
  }
}
