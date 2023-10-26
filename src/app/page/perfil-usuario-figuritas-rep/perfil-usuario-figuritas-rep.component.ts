import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Figurita } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'

@Component({
  selector: 'app-perfil-usuario-figuritas-rep',
  templateUrl: './perfil-usuario-figuritas-rep.component.html',
  styleUrls: ['./perfil-usuario-figuritas-rep.component.scss']
})
export class PerfilUsuarioFiguritasRepComponent {
  figuritas: Array<Figurita> = []
  agregar = new Aniadir()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public figuritaService: FiguritaService
  ) {}
  ngOnInit() {
    this.obtenerTodasLasFiguritas()
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

  private async obtenerTodasLasFiguritas() {
    try {
      this.figuritas = this.figuritaService.todasLasFiguritas()
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
