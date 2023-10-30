import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Figurita } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-perfil-usuario-figuritas-rep',
  templateUrl: './perfil-usuario-figuritas-rep.component.html',
  styleUrls: ['./perfil-usuario-figuritas-rep.component.scss']
})
export class PerfilUsuarioFiguritasRepComponent {
  figuritas: Array<Figurita> = []
  agregar = new Aniadir()
  filtros = new FiltroFiguritas()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public figuritaService: FiguritaService
  ) {}
  ngOnInit() {
    this.figuritasRepetidasUsuario()
  }

  faltantes() {
    this.router.navigateByUrl('/FiguritaFaltante')
  }
  repetidas() {
    this.router.navigateByUrl('/FiguritaRepetida')
  }
  informacion() {
    this.router.navigateByUrl('/PerfilUsuario')
  }

  private async figuritasRepetidasUsuario() {
    try {
      this.figuritas = await this.figuritaService.figuritasRepetidasUsuario()
    } catch (error) {
      mostrarError(this, error)
    }
  }
}

export class Aniadir {
  aniadir() {
    alert('agregandooo...')
  }
}
