import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['../../../../Maquetado/css/footer.css',
  '../../../../Maquetado/css/nav.css',
  '../../../../Maquetado/css/input.css',
  '../../../../Maquetado/css/button.css',
  '../../../../Maquetado/css/toolbox.css',
  '../../../../Maquetado/css/perfilUsuario.css'
]
})
export class PerfilUsuarioComponent {
 cambioDeUsuario = new CambioUsername()
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



export class CambioUsername {
  editando = false
  nombreUsuario='pepe'
  nuevoNombreUsuario=''

  hizoClick (){
    console.log(this.editando)
    alert('Has hecho click en el icono de lápiz')
    this.editando= true
    console.log(this.editando)
    console.log(this.nombreUsuario)

  }
  guardar() {
    if (this.nombreUsuario.length != 0) {
      this.nuevoNombreUsuario = this.nombreUsuario
    } else {
      alert('error')
        }
    console.log(this.nombreUsuario)
    console.log(this.nuevoNombreUsuario)
    this.editando = false
  }
  
}
