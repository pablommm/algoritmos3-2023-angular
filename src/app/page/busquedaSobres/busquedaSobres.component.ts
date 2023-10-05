import { PuntoDeVentaService } from '../../services/puntoDeVenta.service'
import { PuntoDeVenta } from '../../dominio/puntoDeVenta'
import { Component, OnInit } from '@angular/core'
/* import { Router } from '@angular/router' */
import { mostrarError } from '../../util/errorHandler'

export const errorHandler = (component: BusquedaSobresComponent) => ({
  error: async (error: Error) => {
    component.puntosDeVenta =
      await component.puntoDeVentaService.todosLosPuntoDeVentas()
    mostrarError(component, error)
  }
})

@Component({
  selector: 'app-busquedaSobres',
  templateUrl: './busquedaSobres.component.html',
  styleUrls: ['./busquedaSobres.component.scss'],
  providers: []
})
export class BusquedaSobresComponent implements OnInit {
  puntosDeVenta: Array<PuntoDeVenta> = []
  errors = []

  constructor(public puntoDeVentaService: PuntoDeVentaService) {}

  ngOnInit() {
    this.obtenerTodosLosPuntoDeVentas()
  }

  obtenerTodosLosPuntoDeVentas() {
    try {
      this.puntosDeVenta = this.puntoDeVentaService.todosLosPuntoDeVentas()
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
