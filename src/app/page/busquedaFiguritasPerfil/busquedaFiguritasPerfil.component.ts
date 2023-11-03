import { FiguritaUsuario } from './../../dominio/figurita'
import { Component, OnInit } from '@angular/core'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from 'src/app/util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

export const errorHandler = (component: BusquedaFiguritasPerfilComponent) => ({
  error: async (error: Error) => {
    mostrarError(component, error)
  }
})

@Component({
  selector: 'app-busquedaFiguritasPerfil',
  templateUrl: './busquedaFiguritasPerfil.component.html',
  styleUrls: ['./busquedaFiguritasPerfil.component.scss'],
  providers: []
})
export class BusquedaFiguritasPerfilComponent implements OnInit {
  figuritas: Array<FiguritaUsuario> = []
  errors = []
  filtros = new FiltroFiguritas()

  constructor(private figuritaService: FiguritaService) {}

  async ngOnInit() {
    await this.obtenerTodasLasFiguritas()
  }

  private async obtenerTodasLasFiguritas() {
    try {
      this.figuritas = await this.figuritaService.todasLasFiguritaDelAlbum(
        this.filtros
      )
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async realizarBusqueda(campoDeBusqueda: string) {
    this.filtros.campoDeBusqueda = campoDeBusqueda
    this.obtenerTodasLasFiguritas()
  }
}
