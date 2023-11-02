import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { Observable, lastValueFrom } from 'rxjs'
import { Direccion, DireccionJSON } from '../dominio/direccion'

@Injectable({
  providedIn: 'root'
})
export class DirecionService {
  constructor(private httpClient: HttpClient) {}
  /*
  async getProvincias() {
    const provincias$ = this.httpClient.get<DireccionJSON[]>(
      `${REST_SERVER_URL}/getDireccion`
    )
    return await this.awaitProvincias(provincias$)
  }

  async awaitProvincias(direccion$: Observable<DireccionJSON[]>) {
    const direccionJSON = await lastValueFrom(direccion$)
    console.log(direccionJSON)

    return direccionJSON.map((direccionJSON: DireccionJSON) =>
      Direccion.fromJson(direccionJSON)
    )
  }
  */

  async obtenerDirecion() {
    const direccionJSON$ = this.httpClient.get<DireccionJSON>(
      `${REST_SERVER_URL}/getDireccion`
    )
    const direccionJSON = await lastValueFrom(direccionJSON$)

    return Direccion.fromJson(direccionJSON)
  }
}
