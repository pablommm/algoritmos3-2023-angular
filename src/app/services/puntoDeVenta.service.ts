import { Injectable } from '@angular/core'
import { PuntoDeVenta } from '../dominio/puntoDeVenta'
import { puntoDeVenta } from '../mocks/puntoDeVentas'
@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {
  constructor() {}

  todosLosPuntoDeVentas(): PuntoDeVenta[] {
    const puntoDeVentas: PuntoDeVenta[] = puntoDeVenta.map((puntoDeVentaJSON) => {
      return PuntoDeVenta.fromJson(puntoDeVentaJSON)
    })

    return puntoDeVentas
  }
}
