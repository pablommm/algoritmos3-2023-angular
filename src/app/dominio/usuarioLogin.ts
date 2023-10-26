//import { Usuario } from './usuario'

export type UsuarioLoginJSON = {
 usuario : string
 contrasenia :string
}

export class UsuarioLogin {
  constructor(
    public usuario: string = '',
    public contrasenia: string = ''
  ) {}
  public id!: number

  static fromJson(usuarioLoginJSON: UsuarioLoginJSON): UsuarioLogin {
    console.log(usuarioLoginJSON)
    return Object.assign(new UsuarioLogin(), usuarioLoginJSON, {
      
    })
  }

}
