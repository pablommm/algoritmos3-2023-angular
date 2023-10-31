//import { usuario } from './../mocks/usuarios'
import { Injectable } from '@angular/core'
//import { UsuarioLogin, UsuarioLoginJSON } from '../dominio/usuarioLogin'
//import { usuariosLogin } from '../mocks/usuariosLogin'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { UsuarioLogin } from '../dominio/usuarioLogin'
import { REST_SERVER_URL } from './configuration'
//import { REST_SERVER_URL } from './configuration'
//import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  constructor(private httpClient: HttpClient) {}

  async usuariosLogin() {
    const usuarioLogin$ = this.httpClient.post<number>(
      `${REST_SERVER_URL}/usuarioLogin`,
      UsuarioLogin.getInstance().toJSON()
    )
    const usuarioLogin = await lastValueFrom(usuarioLogin$)
    console.log(usuarioLogin)
    return usuarioLogin
  }

  validarUsuario(usuario: number) {
    return usuario != 0
  }
}
