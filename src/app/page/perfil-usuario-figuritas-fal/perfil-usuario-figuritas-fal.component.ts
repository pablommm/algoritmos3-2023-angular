import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-perfil-usuario-figuritas-fal',
  templateUrl: './perfil-usuario-figuritas-fal.component.html',
  styleUrls: ['./perfil-usuario-figuritas-fal.component.scss']
})


export class PerfilUsuarioFiguritasFalComponent {

  datosDePerfil = new DatosDePerfil()
  constructor(private router: Router, private route :ActivatedRoute) {}
  ngOnInit() {}

  faltantes(){
    this.router.navigateByUrl('/FiguritaFaltante')

  }
  repetidas(){
    this.router.navigateByUrl('/FiguritaRepetida')

  }
  informacion(){
    this.router.navigateByUrl('/PerfilUsuario')
  }
}
export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Boliviano'
}