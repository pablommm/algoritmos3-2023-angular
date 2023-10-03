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



