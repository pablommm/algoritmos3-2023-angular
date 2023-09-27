import { Figurita } from '../dominio/figurita';
import { Injectable } from '@angular/core';
import { REST_SERVER_URL } from './configuration';
import { figuritas } from '../mocks/listaFiguritas';

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor() {}

  todasLasFiguritas(): Figurita[] {
    try {
      return figuritas.map((figuritaJSON) => Figurita.fromJson(figuritaJSON));
    } catch (error) {
      console.error('Error al cargar las figuritas', error);
      return []; 
    }
  }
}
