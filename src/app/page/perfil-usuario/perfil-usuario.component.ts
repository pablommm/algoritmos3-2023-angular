import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Jugador } from 'src/app/dominio/Jugador'
import { JugadorService } from 'src/app/services/Jugador.service'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  jugadores: Array<Jugador> = []
  jugador! : Jugador[]
  cambioDeUsuario = new CambioUsername()
  datosDePerfil = new DatosDePerfil()
  jugadorFav = ''
/*   jugadores = ['Messi', 'Neymar', 'Cristiano']
 */  
constructor(
    private router: Router,
    private route: ActivatedRoute,
    public jugadorService : JugadorService
  ) {}
 

  async ngOnInit() {
    //this.obtenerJugadores()
     this.jugadores = await this.jugadorService.obtenerJugadores()
  }

  pepito(){
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
