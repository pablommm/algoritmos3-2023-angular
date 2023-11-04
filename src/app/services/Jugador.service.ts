import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Jugador, JugadorJSON } from '../dominio/Jugador'
import { lastValueFrom } from 'rxjs'
import { REST_SERVER_URL } from './configuration'

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

constructor(private httpClient: HttpClient) { }


async obtenerJugadores() {
  const jugador$ = this.httpClient.get<JugadorJSON[]>(
    `${REST_SERVER_URL}/jugadores/`
  )
  const jugadorJSON = await lastValueFrom(jugador$)
  return jugadorJSON.map((jugadorJSON: JugadorJSON) =>
    Jugador.fromJson(jugadorJSON)
  )
}

}
