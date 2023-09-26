import { Figurita, FiguritaJSON } from './../dominio/figurita';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from './configuration'
@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  

  constructor(private httpClient: HttpClient) {
  }

  async todasLasFiguritas() : Promise<Figurita[]> {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>('http://localhost:4200' + '/busquedaFiguritas')
    const figuritasJSON = await lastValueFrom(figuritas$)
    return figuritasJSON.map((figuritaJSON) => Figurita.fromJson(figuritaJSON))
  }

 

}

