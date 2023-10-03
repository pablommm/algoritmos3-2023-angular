import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tool-boox',
  templateUrl: './tool-boox.component.html',
  styleUrls: ['./tool-boox.component.css']
})
export class ToolBooxComponent implements OnInit {
  cambioDeUsuario = new CambioUsername()
  constructor() { }
  datosDePerfil = new DatosDePerfil()
  ngOnInit() {
  }

}

export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Baires'
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