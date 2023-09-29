import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-perfil-usuario-figuritas-rep',
  templateUrl: './perfil-usuario-figuritas-rep.component.html',
  styleUrls: ['./perfil-usuario-figuritas-rep.component.scss']
})
export class PerfilUsuarioFiguritasRepComponent {
agregar = new Aniadir()

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

export class Aniadir{

  aniadir(){
    alert("agregandooo...")
  }

}
