import { Injectable } from '@angular/core';
import { Supermercado } from '../dominio/supermercado';
import { supermercado } from '../mocks/listaSupermercados'; // Asumiendo que esta es la lista que quieres usar

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {
  constructor() {}

  todosLosSupermercados(): Supermercado[] {
    const supermercados: Supermercado[] = supermercado.map((supermercadoJSON) => {
      return Supermercado.fromJson(supermercadoJSON);
    });

    return supermercados;
  }
}
