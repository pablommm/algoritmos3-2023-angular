import { SupermercadoService } from './../../services/supermercado.service'
import { Supermercado } from './../../dominio/supermercado'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { mostrarError } from '../../util/errorHandler'

export const errorHandler = (component: BusquedaSobresComponent) => ({
  error: async (error: Error) => {
    component.listaSupermercados = await component.supermercadoService.todosLosSupermercados()
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

  listaSupermercados: Array<Supermercado> = []
  errors = []
  
  constructor(public supermercadoService : SupermercadoService) {}

   ngOnInit() {
     this.obtenerTodosLosSupermercados()
  }
  

  

  obtenerTodosLosSupermercados() {
    try {
      this.listaSupermercados = this.supermercadoService.todosLosSupermercados()
    } catch (error) {
      mostrarError(this, error)
  }
  
}
}
