//import { usuario } from './../mocks/usuarios'
import { Injectable } from '@angular/core'
//import { UsuarioLogin, UsuarioLoginJSON } from '../dominio/usuarioLogin'
//import { usuariosLogin } from '../mocks/usuariosLogin'
import { HttpClient } from '@angular/common/http'
import { UsuarioLoginJSON } from '../dominio/usuarioLogin'
import { lastValueFrom } from 'rxjs'
//import { REST_SERVER_URL } from './configuration'
//import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  constructor(private httpClient: HttpClient) {}

  /*
  verificarUsuario(usuarioLogin: UsuarioLogin) {
    console.log(usuarioLogin.usuario)

    // POST PARA HACER EL LOGIN POSTA CONTRA EL BACK 

    const usuarioEncontrado = usuariosLogin.find(
      (u) =>
        u.usuario.toLowerCase() === usuarioLogin.usuario &&
        u.contrasenia === usuarioLogin.contrasenia
    )
    return usuarioEncontrado
  } */

  async usuariosLogin() {
    const usuarioLogin$ = this.httpClient.post<UsuarioLoginJSON>(
      '${REST_SERVER_URL}/usuarioLogin/',
      {}
    )
    const usuarioLogin = await lastValueFrom(usuarioLogin$)
    console.log(usuarioLogin)

    /*
    //const usuario$ = this.httpClient.get<UsuarioJSON>(${REST_SERVER_URL}/usuarioLogin, { params })
    
    return usuarioLoginJSON. map((usuarioLoginJSON: UsuarioLoginJSON) =>UsuarioLogin.fromJson(usuarioLoginJSON))
    */
  }
}
