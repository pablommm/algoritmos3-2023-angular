import { Injectable } from '@angular/core'
import { usuario } from '../mocks/usuarios'
import { Usuario, UsuarioJSON } from '../dominio/usuario'
import { REST_SERVER_URL } from './configuration'
import { HttpClient } from '@angular/common/http'
import { UsuarioLogin } from '../dominio/usuarioLogin'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  elUsuario(): Usuario {
    const usuarios = Usuario.fromJson(usuario[0])
    /* const objetoUsuario = usuario[0] */
    return usuarios
  }

  /* async getTiposUsuarios() {
    `${REST_SERVER_URL}/listaTiposUsuarios`
  } */

  async usuarioLogueado() {
    console.log(UsuarioLogin.getInstance().id)

    const usuarioJSON$ = this.httpClient.get<UsuarioJSON>(
      `${REST_SERVER_URL}/Usuario/${UsuarioLogin.getInstance().id}`
    )

    const usuarioJSON = await lastValueFrom(usuarioJSON$)

    return Usuario.fromJson(usuarioJSON)
  }
}
