import { Pipe, PipeTransform } from '@angular/core';
import { PuntoDeVenta } from '../dominio/puntoDeVenta'

@Pipe({
  name: 'precioSobre'
})
export class PrecioSobrePipe implements PipeTransform {

  transform(puntoDeVenta: PuntoDeVenta): string {
    return ("Precio por sobre").concat(" ").concat("$").concat(puntoDeVenta.precio)
  }


}
