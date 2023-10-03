import { Pipe, PipeTransform } from '@angular/core';
import { SuPuntoDeVenta } from '../dominio/suPuntoDeVenta'

@Pipe({
  name: 'precioSobre'
})
export class PrecioSobrePipe implements PipeTransform {

  transform(suPuntoDeVenta: SuPuntoDeVenta): string {
    return ("Precio por sobre").concat(" ").concat("$").concat(suPuntoDeVenta.precio)
  }


}
