import { Figurita } from './../../dominio/figurita'
import { Component, OnInit } from '@angular/core'
import { FiguritaService } from '../../services/figurita.service'
import { Router } from '@angular/router'
import { mostrarError } from '../../util/errorHandler'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'

export const errorHandler = (component: BusquedaFiguritasComponent) => ({
  error: async (error: Error) => {
    component.listaFiguritas =
      await component.figuritaService.todasLasFiguritas()
    mostrarError(component, error)
  }
})

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.scss'],
  providers: []
})
export class BusquedaFiguritasComponent implements OnInit {
  listaFiguritas: Array<Figurita> = []
  errors = []

  constructor(public figuritaService: FiguritaService) {}

  ngOnInit() {
    this.obtenerTodasLasFiguritas()
  }

  obtenerTodasLasFiguritas() {
    try {
      this.listaFiguritas = this.figuritaService.todasLasFiguritas()
    } catch (error) {
      mostrarError(this, error)
    }
  }
  filtros = new Filtros()
}

export class Filtros {
  desde = ''
  hasta = ''
  esPromesa = false
  esOnFire = false

  validacionHasta() {
    if (this.desde != '' && this.hasta != '') {
      if (this.desde > this.hasta) {
        alert('El valor del campo desde no puede ser menor que el de hasta')
      }
    }
  }

  busqueda() {
    this.validacionHasta()
    alert(this.desde + '....' + this.hasta)
  }
}
