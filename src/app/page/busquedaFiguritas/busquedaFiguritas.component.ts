import { Figurita } from './../../dominio/figurita'
import { Component, OnInit } from '@angular/core'
import { FiguritaService } from '../../services/figurita.service'
/* import { Router } from '@angular/router' */
import { mostrarError } from '../../util/errorHandler'
/* import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe' */

export const errorHandler = (component: BusquedaFiguritasComponent) => ({
  error: async (error: Error) => {
    component.figuritas = await component.figuritaService.todasLasFiguritas()
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
  figuritas: Array<Figurita> = []
  errors = []

  constructor(public figuritaService: FiguritaService) {}

  ngOnInit() {
    this.obtenerTodasLasFiguritas()
  }

  obtenerTodasLasFiguritas() {
    try {
      this.figuritas = this.figuritaService.todasLasFiguritas()
    } catch (error) {
      mostrarError(this, error)
    }
  }
  
}

