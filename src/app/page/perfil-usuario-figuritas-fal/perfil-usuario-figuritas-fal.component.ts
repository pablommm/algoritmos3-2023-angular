import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FiguritaUsuario } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-perfil-usuario-figuritas-fal',
  templateUrl: './perfil-usuario-figuritas-fal.component.html',
  styleUrls: ['./perfil-usuario-figuritas-fal.component.scss']
})
export class PerfilUsuarioFiguritasFalComponent {
  figuritas: Array<FiguritaUsuario> = []
  filtros = new FiltroFiguritas()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public figuritaService: FiguritaService
  ) {}

  async ngOnInit() {
    await this.figuritasFaltantesUsuario()
  }

  private async figuritasFaltantesUsuario() {
    try {
      this.figuritas = await this.figuritaService.figuritasFaltantesUsuario()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async quitarFigurita(id: number) {
    await this.figuritaService.quitarFiguritaFaltante(id)
    await this.figuritasFaltantesUsuario()
  }
}
