import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/dominio/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'
import { mostrarError } from '../../util/errorHandler'

export const errorHandler = (component: FormComponent) => ({
  error: async (error: Error) => {
    component.usuarioMock = await component.usuarioService.elUsuario()
    mostrarError(component, error)
  }
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  actualizarFecha(fecha: Date) {
    this.usuarioMock.fechaDeNacimiento = fecha
  }

  usuarioMock!: Usuario
  errors = []
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerElUsuario()
  }

  obtenerElUsuario() {
    try {
      this.usuarioMock = this.usuarioService.elUsuario()
      /* alert(this.usuarioMock) */
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
