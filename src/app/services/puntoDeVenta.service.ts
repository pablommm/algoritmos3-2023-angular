import { PuntoDeVenta } from 'src/app/dominio/puntoDeVenta'
import { Injectable } from '@angular/core'
import { puntoDeVenta } from '../mocks/listaPuntosDeVenta' // Asumiendo que esta es la lista que quieres usar

@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {
  constructor() {}

  todosLosPuntosDeVenta(): PuntoDeVenta[] {
    const puntosDeVenta: PuntoDeVenta[] = puntoDeVenta.map((puntoDeVentaJSON) => {
      return PuntoDeVenta.fromJson(puntoDeVentaJSON)
    })

    return puntosDeVenta
  }
}
