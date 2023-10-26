//import { usuario } from './../mocks/usuarios'
import { Injectable } from '@angular/core'
//import { UsuarioLogin, UsuarioLoginJSON } from '../dominio/usuarioLogin'
//import { usuariosLogin } from '../mocks/usuariosLogin'
import { HttpClient } from '@angular/common/http'
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
    /*
    //const usuario$ = this.httpClient.get<UsuarioJSON>(${REST_SERVER_URL}/usuarioLogin, { params })
           
    const usuarioLogin$ = this.httpClient.post<UsuarioLoginJSON>('${REST_SERVER_URL}/usuarioLogin/',{})

    const usuarioLoginJSON = await lastValueFrom(usuarioLogin$)

    return usuarioLoginJSON. map((usuarioLoginJSON: UsuarioLoginJSON) =>UsuarioLogin.fromJson(usuarioLoginJSON))
    */
  }
}
