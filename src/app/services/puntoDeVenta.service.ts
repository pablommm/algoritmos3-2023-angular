import { Injectable } from '@angular/core'
/* import { PuntoDeVenta, PuntoDeVentaJSON } from '../dominio/puntoDeVenta' */
/* import { puntoDeVenta } from '../mocks/puntosDeVenta' */
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'
import { PuntoDeVenta } from '../dominio/puntoDeVenta'
@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {
  constructor(private httpClient: HttpClient) {}

  puntoDeVenta: PuntoDeVenta[] = [
    {
      nombre: 'Carrefour',
      direccion: 'Av. San Martin 4930',
      ubicacionGeografica: '(34.9696; 38.5940)',
      distancia: 3,
      stock: 3,
      precio: 120,
      tipo: 'Supermercado'
    }
  ]

  async todosLosPuntoDeVentas() {
    const puntoDeVentas$ = this.httpClient.get(
      /* <PuntoDeVentaJSON[]> */ REST_SERVER_URL + '/puntoDeVentas/'
    )

    const puntoDeVentasJSON = await lastValueFrom(puntoDeVentas$)
    /* console.log(puntoDeVentasJSON) */
    console.log(puntoDeVentasJSON)

    /* const puntoDeVentas: PuntoDeVenta[] = puntoDeVenta.map(
      (puntoDeVentaJSON) => {
        return PuntoDeVenta.fromJson(puntoDeVentaJSON)
      }
    ) */

    /* return puntoDeVentas */

    /* return puntoDeVentasJSON.map((puntoDeVentaJSON: PuntoDeVentaJSON) =>
      PuntoDeVenta.fromJson(puntoDeVentaJSON)
    ) */

    return this.puntoDeVenta
  }
}
