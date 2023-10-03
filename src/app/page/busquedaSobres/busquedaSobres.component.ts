import { SuPuntoDeVentaService } from '../../services/suPuntoDeVenta.service'
import { SuPuntoDeVenta } from './../../dominio/suPuntoDeVenta'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { mostrarError } from '../../util/errorHandler'

export const errorHandler = (component: BusquedaSobresComponent) => ({
  error: async (error: Error) => {
    component.listaSuPuntoDeVentas = await component.suPuntoDeVentaService.todosLosSuPuntoDeVentas()
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

  listaSuPuntoDeVentas: Array<SuPuntoDeVenta> = []
  errors = []
  
  constructor(public suPuntoDeVentaService : SuPuntoDeVentaService) {}

   ngOnInit() {
     this.obtenerTodosLosSuPuntoDeVentas()
  }
  

  

  obtenerTodosLosSuPuntoDeVentas() {
    try {
      this.listaSuPuntoDeVentas = this.suPuntoDeVentaService.todosLosSuPuntoDeVentas()
    } catch (error) {
      mostrarError(this, error)
  }
  
}
}
