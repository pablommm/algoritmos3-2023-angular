import { Injectable } from '@angular/core'
import { UsuarioLogin } from '../dominio/usuarioLogin'
import { usuariosLogin } from '../mocks/usuariosLogin'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  constructor() {}

  usuarioLogin = new UsuarioLogin()

  verificarUsuario(usuarioLogin: UsuarioLogin) {
    console.log(usuarioLogin.usuario)

    /* POST PARA HACER EL LOGIN POSTA CONTRA EL BACK */

    this.usuarioLogin = usuarioLogin

    const usuarioEncontrado = usuariosLogin.find(
      (u) =>
        u.usuario.toLowerCase() === usuarioLogin.usuario &&
        u.contrasenia === usuarioLogin.contrasenia
    )

    return usuarioEncontrado
  }
}
