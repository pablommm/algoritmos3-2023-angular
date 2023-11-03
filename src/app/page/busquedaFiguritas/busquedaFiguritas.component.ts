import { FiguritaUsuario } from './../../dominio/figurita'
import { Component, OnInit } from '@angular/core'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'
import { Router } from '@angular/router'

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.scss'],
  providers: []
})
export class BusquedaFiguritasComponent implements OnInit {
  figuritas: Array<FiguritaUsuario> = []
  errors = []
  filtros = new FiltroFiguritas()

  constructor(
    private figuritaService: FiguritaService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getFiguritas()
    console.log(this.figuritas)
  }

  private async getFiguritas() {
    try {
      this.figuritas = await this.figuritaService.todasLasFiguritas(
        this.filtros
      )
      console.log(this.figuritas)
      console.log(this.filtros.desde)
      console.log(this.filtros.hasta)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async realizarBusqueda(campoDeBusqueda: string) {
    this.filtros.campoDeBusqueda = campoDeBusqueda
    this.getFiguritas()
    /* ENVIAR AL SERVICE */
  }

  mostrarDetalles(figurita: FiguritaUsuario) {
    this.router.navigate(['/DetalleFigurita', figurita.getId()])
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
