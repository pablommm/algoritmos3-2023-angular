/* import { puntoDeVenta } from './../../mocks/listaPuntoDeVentas' */
import { Component, Input } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { PuntoDeVenta } from 'src/app/dominio/puntoDeVenta'

@Component({
  selector: 'app-cardSobres',
  templateUrl: './cardSobres.component.html',
  styleUrls: ['./cardSobres.component.scss']
})

export class CardSobresComponent {

  constructor(private router: Router, private route :ActivatedRoute) {}
  
  @Input() cardSobres!: PuntoDeVenta

  iconoPuntoDeVenta(puntoDeVenta: PuntoDeVenta) {
    const tipo = puntoDeVenta.tipo.toUpperCase()

    if(tipo =="KIOSCO") {
      return "fa-solid fa-shop card-detalles-highlight"
    }
    if(tipo =="SUPERMERCADO") {
      return "fa-solid fa-basket-shopping card-detalles-highlight"
    }
    return "fa-solid fa-pen-ruler card-detalles-highlight"
  }

}
