import { usuario } from './../mocks/usuarios'
import { Injectable } from '@angular/core'
import { UsuarioLogin } from '../dominio/usuarioLogin'
import { usuariosLogin } from '../mocks/usuariosLogin'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from './configuration'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  /*   constructor(private httpClient: HttpClient) {}
   */
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

  async back() {
    /* const usuarioLogin$ = this.httpClient.<[]>(
      `${REST_SERVER_URL}/login/`
    )
    const usuarioLoginJSON = await lastValueFrom(usuarioLogin$)
     console.log(puntoDeVentasJSON) 
    console.log(usuarioLoginJSON)*/
  }
}
