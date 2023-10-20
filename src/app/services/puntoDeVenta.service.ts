import { Injectable } from '@angular/core'
import { PuntoDeVenta, PuntoDeVentaJSON } from '../dominio/puntoDeVenta'
/* import { puntoDeVenta } from '../mocks/puntosDeVenta' */
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {
  constructor(private httpClient: HttpClient) {}

  async todosLosPuntoDeVentas(): Promise<PuntoDeVenta[]> {
    const puntoDeVentas$ = this.httpClient.get<PuntoDeVentaJSON[]>(
      REST_SERVER_URL + '/puntoDeVentas/'
    )

    const puntoDeVentasJSON: PuntoDeVentaJSON[] =
      await lastValueFrom(puntoDeVentas$)

    /* const puntoDeVentas: PuntoDeVenta[] = puntoDeVenta.map(
      (puntoDeVentaJSON) => {
        return PuntoDeVenta.fromJson(puntoDeVentaJSON)
      }
    ) */

    /* return puntoDeVentas */

    return puntoDeVentasJSON.map((puntoDeVentaJSON: PuntoDeVentaJSON) =>
      PuntoDeVenta.fromJson(puntoDeVentaJSON)
    )
  }
}
