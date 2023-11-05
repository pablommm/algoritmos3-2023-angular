import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'
import { Direccion, DireccionJSON } from '../dominio/direccion'

@Injectable({
  providedIn: 'root'
})
export class DirecionService {
  constructor(private httpClient: HttpClient) {}
  
  async obtenerDirecion() {
    const direccionJSON$ = this.httpClient.get<DireccionJSON>(
      `${REST_SERVER_URL}/getDireccion`
    )
    const direccionJSON = await lastValueFrom(direccionJSON$)

    return Direccion.fromJson(direccionJSON)
  }
}
