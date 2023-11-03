import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FiguritaUsuario } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-perfil-usuario-figuritas-rep',
  templateUrl: './perfil-usuario-figuritas-rep.component.html',
  styleUrls: ['./perfil-usuario-figuritas-rep.component.scss']
})
export class PerfilUsuarioFiguritasRepComponent {
  figuritas: Array<FiguritaUsuario> = []
  filtros = new FiltroFiguritas()
  esRepetida = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public figuritaService: FiguritaService
  ) {}
  ngOnInit() {
    this.figuritasRepetidasUsuario()
  }
  currentUrl = this.router.url
  esRutaRepetida() {
    if (this.currentUrl === '/Perfil/FiguritaRepetida') {
      this.esRepetida = true
      alert(this.esRepetida)
      // agregar comportamiento para añadir la figurita a la lista de repetida y faltantes
    }
  }

  private async figuritasRepetidasUsuario() {
    try {
      this.figuritas = await this.figuritaService.figuritasRepetidasUsuario()
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
