import { Pipe, PipeTransform } from '@angular/core'
import { JugadorDom } from '../dominio/Jugador'

@Pipe({
  name: 'JugadorFav'
})
export class JugadorFavPipe implements PipeTransform {

  transform(jugador: JugadorDom): string {
    return (jugador.nombre).concat(" ").concat(jugador.apellido).concat(" ").concat(jugador.nroDeCamiseta.toString()).concat("ID:").concat(jugador.id.toString())
  }

}
