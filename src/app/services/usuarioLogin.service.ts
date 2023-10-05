import { Injectable } from '@angular/core'
import { UsuarioLogin } from '../dominio/usuarioLogin'
import { usuariosLogin } from '../mocks/usuariosLogin'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  constructor() {}

  verificarUsuario(usuarioLogin: UsuarioLogin) {
    console.log(usuarioLogin.usuario)

    const usuarioEncontrado = usuariosLogin.find(
      (u) =>
        u.usuario.toLowerCase() === usuarioLogin.usuario &&
        u.contrasenia === usuarioLogin.contrasenia
    )

    if (usuarioEncontrado) {
      return true
    } else {
      alert('Usuario/Contraseña inválidos, ingrese correctamente los valores')
      return false
    }
  }
}
