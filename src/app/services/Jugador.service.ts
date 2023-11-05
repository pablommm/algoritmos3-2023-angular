import { JugadorDom } from './../dominio/Jugador'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { JugadorJSON } from '../dominio/Jugador'
import { Observable, lastValueFrom } from 'rxjs'
import { REST_SERVER_URL } from './configuration'

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

constructor(private httpClient: HttpClient) { }

/*
async obtenerJugadores() {
  const jugadorJSON$ = this.httpClient.get<JugadorJSON[]>(
    `${REST_SERVER_URL}/jugadores`
  )
  const jugadorJSON = await lastValueFrom(jugadorJSON$)
  console.log(jugadorJSON)
  console.log("pase por el jugador service")
  return jugadorJSON.map((jugadorJSON: JugadorJSON) => Jugador.fromJson(jugadorJSON))
  //return Jugador.fromJson(jugadorJSON)*/

  async todosLosJugadores(){
    const jugadorDom$ = this.httpClient.get<JugadorJSON[]>(
      `${REST_SERVER_URL}/jugadores`
    )
    return await this.awaitReturnJugadores(jugadorDom$)
  }

  async awaitReturnJugadores(jugador$:Observable<JugadorJSON[]>){
    const jugadorJSON = await lastValueFrom(jugador$)
    console.log(jugadorJSON)
    console.log("pase por jugador service")

    return jugadorJSON.map((jugadorJSON:JugadorJSON)=> JugadorDom.fromJson(jugadorJSON))
  }
  
}


