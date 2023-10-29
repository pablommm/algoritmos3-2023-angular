import { Injectable } from '@angular/core'
import { usuario } from '../mocks/usuarios'
import { Usuario } from '../dominio/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() {}

  elUsuario(): Usuario {
    const usuarios = Usuario.fromJson(usuario[0])
    /* const objetoUsuario = usuario[0] */
    return usuarios
  }

  /*
  async getTiposUsuarios() {
    `${REST_SERVER_URL}/listaTiposUsuarios`
  }
*/

  /*
    async todasLasFiguritas(filtro: FiltroFiguritas) {
    const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
      `${REST_SERVER_URL}/FiguritasRepetidas/0`,
      { params: filtro.asHttpParams() }
    )

    const figuritaJSON = await lastValueFrom(figuritas$)
    console.log(figuritaJSON)

    return figuritaJSON.map((figuritaJSON: FiguritaJSON) =>
      Figurita.fromJson(figuritaJSON)
    )
  }
 */


}
