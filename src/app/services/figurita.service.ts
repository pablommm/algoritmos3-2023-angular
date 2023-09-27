import { Figurita, calcularValoracionBase } from '../dominio/figurita';
import { Injectable } from '@angular/core';
import { figuritas } from '../mocks/listaFiguritas';

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  constructor() {}

  todasLasFiguritas(): Figurita[] {
    try {
      // Calcula la valoración base para cada figurita
      const figuritasConValoracionBase = figuritas.map((figuritaJSON) => {
        const figurita = Figurita.fromJson(figuritaJSON);
        figurita.valoracionBase = calcularValoracionBase(figurita); // Agrega la valoración base
        return figurita;
      });
      return figuritasConValoracionBase;
    } catch (error) {
      console.error('Error al cargar las figuritas', error);
      return []; 
    }
  }
}
