import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { JugadorDom } from 'src/app/dominio/Jugador'
import { JugadorService } from 'src/app/services/Jugador.service'
import { mostrarError } from 'src/app/util/errorHandler'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  jugadores: Array<JugadorDom> = []
  jugadorFavo! : JugadorDom[]
  cambioDeUsuario = new CambioUsername()
  datosDePerfil = new DatosDePerfil()
  //jugadorFav = ''
  //jugadores = ['Messi', 'Neymar', 'Cristiano']
   
constructor(
    private router: Router,
    private route: ActivatedRoute,
    public jugadorService : JugadorService
  ) {}
 

  ngOnInit() {
    //this.obtenerJugadores(){}
    //this.jugadores = await this.jugadorService.todosLosJugadores()    
    //this.getTodosLosJugadores()

    this.getTodosLosJugadores()
    console.log(this.jugadores)
    console.log("pase por el componente perfil usuario")

  }

  async getTodosLosJugadores(){
    try {
      this.jugadores = await this.jugadorService.todosLosJugadores()   
    } catch (error) {
      console.log("catch error no se trajo nada")
      mostrarError(this, error)      
    }
  }

  pepito(){
    console.log("hice click en el boton del lapiz")
    console.log(this.jugadores)
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
  nombreUsuario = 'pepe'
  nuevoNombreUsuario = 'nuevopepe'

  hizoClick() {
    console.log(this.editando)
    alert('Has hecho click en el icono de lápiz')
    this.editando = true
    console.log(this.editando)
    console.log(this.nombreUsuario)
  }
  guardar() {
    if (this.nuevoNombreUsuario.length != 0) {
      this.nombreUsuario = this.nuevoNombreUsuario
    } else {
      alert('error')
    }
    console.log(this.nombreUsuario)
    console.log(this.nuevoNombreUsuario)
    this.editando = false
  }
}
