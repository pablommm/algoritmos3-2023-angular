import { Pipe, PipeTransform } from '@angular/core'
import { Figurita } from '../dominio/figurita'

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(figurita: Figurita): string {
    return (figurita.nombre).concat(" ").concat(figurita.apellido)
  }

}
