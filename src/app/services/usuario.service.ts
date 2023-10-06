import { Injectable } from '@angular/core'
import { usuario } from '../mocks/usuarios'
import { Usuario } from '../dominio/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() {}

  elUsuario(): Usuario {
    const usuarios = Usuario.fromJson(usuario)
    return usuarios
  }
}
