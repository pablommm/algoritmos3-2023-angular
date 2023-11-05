import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Seleccion, SeleccionJSON } from '../dominio/Seleccion'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  constructor(private httpClient: HttpClient) { }


  async todasLasSelecciones() {
    const seleccion$ = this.httpClient.get<SeleccionJSON[]>(
      `${REST_SERVER_URL}/Selecciones`
    )
  
    const seleccionJSON = await lastValueFrom(seleccion$)
    console.log("pase por el selecion service")
    return seleccionJSON.map((seleccionJSON: SeleccionJSON) =>
      Seleccion.fromJson(seleccionJSON)
    )
  }
}
