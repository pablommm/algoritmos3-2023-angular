import { Injectable } from '@angular/core'
import { PuntoDeVenta, PuntoDeVentaJSON } from '../dominio/puntoDeVenta'
/* import { puntoDeVenta } from '../mocks/puntosDeVenta' */
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'
import { FiltroPuntosDeVenta } from '../dominio/filtro'
import { UsuarioLogin } from '../dominio/usuarioLogin'
/* import { PuntoDeVenta } from '../dominio/puntoDeVenta' */
@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {
  constructor(private httpClient: HttpClient) {}

  async todosLosPuntoDeVentas(filtro: FiltroPuntosDeVenta) {
    const puntoDeVentas$ = this.httpClient.get<PuntoDeVentaJSON[]>(
      `${REST_SERVER_URL}/puntoDeVentas/${UsuarioLogin.getInstance().id}`,
      { params: filtro.asHttpParams() }
    )

    /* Query Params? */
    console.log(filtro.asHttpParams)

    const puntoDeVentasJSON = await lastValueFrom(puntoDeVentas$)

    return puntoDeVentasJSON.map((puntoDeVentaJSON: PuntoDeVentaJSON) =>
      PuntoDeVenta.fromJson(puntoDeVentaJSON)
    )
  }
}
