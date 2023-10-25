import { PuntoDeVentaService } from '../../services/puntoDeVenta.service'
import { PuntoDeVenta } from '../../dominio/puntoDeVenta'
import { Component, OnInit } from '@angular/core'
/* import { Router } from '@angular/router' */
/* import { mostrarError } from '../../util/errorHandler' */
import { FiltroPuntosDeVenta } from 'src/app/dominio/filtro'

/* export const errorHandler = (component: BusquedaSobresComponent) => ({
  error: async (error: Error) => {
    component.puntosDeVenta =
      await component.puntoDeVentaService.todosLosPuntoDeVentas()
    mostrarError(component, error)
  }
}) */

@Component({
  selector: 'app-busquedaSobres',
  templateUrl: './busquedaSobres.component.html',
  styleUrls: ['./busquedaSobres.component.scss'],
  providers: []
})
export class BusquedaSobresComponent implements OnInit {
  puntosDeVenta!: PuntoDeVenta[]
  errors = []
  filtros = new FiltroPuntosDeVenta()

  constructor(public puntoDeVentaService: PuntoDeVentaService) {}

  async ngOnInit() {
    await this.getFiguritas()
  }

  private async getFiguritas() {
    this.puntosDeVenta = await this.puntoDeVentaService.todosLosPuntoDeVentas(
      this.filtros
    )
    console.log(this.filtros.asHttpParams)
  }

  async realizarBusqueda(campoDeBusqueda: string) {
    this.filtros.campoDeBusqueda = campoDeBusqueda
    this.getFiguritas()
    /* ENVIAR AL SERVICE */
  }

  /* obtenerTodosLosPuntoDeVentas() {
    try {
      this.puntosDeVenta = this.puntoDeVentaService.todosLosPuntoDeVentas()
    } catch (error) {
      mostrarError(this, error)
    }
  } */
}
