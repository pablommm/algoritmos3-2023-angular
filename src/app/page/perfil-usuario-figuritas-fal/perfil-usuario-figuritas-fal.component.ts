import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { Figurita } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'

@Component({
  selector: 'app-perfil-usuario-figuritas-fal',
  templateUrl: './perfil-usuario-figuritas-fal.component.html',
  styleUrls: ['./perfil-usuario-figuritas-fal.component.scss']
})


export class PerfilUsuarioFiguritasFalComponent {
  faltantes(){
    this.router.navigateByUrl('/FiguritaFaltante')

  }
  repetidas(){
    this.router.navigateByUrl('/FiguritaRepetida')

  }
  informacion(){
    this.router.navigateByUrl('/PerfilUsuario')
  }

  listaFiguritas: Array<Figurita> = []

  datosDePerfil = new DatosDePerfil()
  constructor(private router: Router, private route :ActivatedRoute, public figuritaService : FiguritaService) {}
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

}
export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Boliviano'
}