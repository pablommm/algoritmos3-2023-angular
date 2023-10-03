import { Injectable } from '@angular/core';
import { SuPuntoDeVenta } from '../dominio/suPuntoDeVenta';
import { suPuntoDeVenta } from '../mocks/suPuntoDeVentas'; // Asumiendo que esta es la lista que quieres usar

@Injectable({
  providedIn: 'root'
})
export class SuPuntoDeVentaService {
  constructor() {}

  todosLosSuPuntoDeVentas(): SuPuntoDeVenta[] {
    const suPuntoDeVentas: SuPuntoDeVenta[] = suPuntoDeVenta.map((suPuntoDeVentaJSON) => {
      return SuPuntoDeVenta.fromJson(suPuntoDeVentaJSON);
    });

    return suPuntoDeVentas;
  }
}
