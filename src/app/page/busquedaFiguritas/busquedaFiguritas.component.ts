import { Figurita } from './../../dominio/figurita'
import { Component, OnInit } from '@angular/core'
import { FiguritaService } from '../../services/figurita.service'
/* import { Router } from '@angular/router' */
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'
/* import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe' */

/* export const errorHandler = (component: BusquedaFiguritasComponent) => ({
  error: async (error: Error) => {
    component.figuritas = await component.figuritaService.todasLasFiguritas()
    mostrarError(component, error)
  }
}) */

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.scss'],
  providers: []
})
export class BusquedaFiguritasComponent implements OnInit {
  figuritas: Array<Figurita> = []
  errors = []
  filtros = new FiltroFiguritas()

  constructor(public figuritaService: FiguritaService) {}

  async ngOnInit() {
    await this.obtenerTodasLasFiguritas()
  }

  private async obtenerTodasLasFiguritas() {
    try {
      this.figuritas = await this.figuritaService.todasLasFiguritas(
        this.filtros
      )
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async realizarBusqueda(campoDeBusqueda: string) {
    this.filtros.campoDeBusqueda = campoDeBusqueda
    this.obtenerTodasLasFiguritas()
    /* ENVIAR AL SERVICE */
  }

  /* filtrarSearchBar(searchBar: SearchBar) {
    alert('me lleg al componente padre ' + searchBar)
    this.filtros.setSearchBar(searchBar)
  }

  filtrarFiltro(filtro: Filtro) {
    this.filtros.setFiltro(filtro)
  }

  enviarAlBack(searchBar: SearchBar, filtro: Filtro) {
    this.filtrarSearchBar(searchBar)
    this.filtrarFiltro(filtro)
  } */
}
