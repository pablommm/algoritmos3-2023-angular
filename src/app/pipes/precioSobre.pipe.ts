import { Pipe, PipeTransform } from '@angular/core';
import { Supermercado } from '../dominio/supermercado'

@Pipe({
  name: 'precioSobre'
})
export class PrecioSobrePipe implements PipeTransform {

  transform(supermercado: Supermercado): string {
    return ("Precio por sobre").concat(" ").concat("$").concat(supermercado.precio)
  }


}
