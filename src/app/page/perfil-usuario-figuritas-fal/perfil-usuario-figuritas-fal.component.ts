import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Figurita } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-perfil-usuario-figuritas-fal',
  templateUrl: './perfil-usuario-figuritas-fal.component.html',
  styleUrls: ['./perfil-usuario-figuritas-fal.component.scss']
})
export class PerfilUsuarioFiguritasFalComponent {
  figuritas: Array<Figurita> = []
  filtros = new FiltroFiguritas()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public figuritaService: FiguritaService
  ) {}

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
}
