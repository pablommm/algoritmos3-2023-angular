import { Figurita, FiguritaJSON } from './../dominio/figurita'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { REST_SERVER_URL } from './configuration'
@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  

  constructor(private httpClient: HttpClient) {
  }

  async todasLasFiguritas(): Promise<Figurita[]> {
    try {
      const figuritas$ = this.httpClient.get<FiguritaJSON[]>('../../assets/listaFiguritas.json')
      const figuritasJSON = await lastValueFrom(figuritas$)
      return figuritasJSON.map((figuritaJSON) => Figurita.fromJson(figuritaJSON))
    } catch (error) {
      console.error("Error al obtener los datos de figuritas: ", error)
      throw error 
    }
  }
  

  /* async getTareaById(id: number) {
    const tareaJSON$ = this.httpClient.get<TareaJSON>(REST_SERVER_URL + '/tareas/' + id)
    const tareaJSON = await lastValueFrom(tareaJSON$)
    return tareaJSON ? Tarea.fromJson(tareaJSON) : undefined
  }

  actualizarTarea(tarea: Tarea) {
    return this.httpClient.put<TareaJSON>(REST_SERVER_URL + '/tareas/' + tarea.id, tarea.toJSON())
  }

  async crearTarea(tarea: Tarea) {
    await lastValueFrom(this.httpClient.post(REST_SERVER_URL + '/tareas', tarea.toJSON()))
  } */

 

}

