/* import { suPuntoDeVenta } from './../../mocks/listaSuPuntoDeVentas' */
import { Component, Input } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { SuPuntoDeVenta } from 'src/app/dominio/suPuntoDeVenta'

@Component({
  selector: 'app-cardSobres',
  templateUrl: './cardSobres.component.html',
  styleUrls: ['./cardSobres.component.scss']
})

export class CardSobresComponent {

  constructor(private router: Router, private route :ActivatedRoute) {}
  
  @Input() cardSobres!: SuPuntoDeVenta

  iconoPuntoDeVenta(suPuntoDeVenta: SuPuntoDeVenta) {
    const tipo = suPuntoDeVenta.tipo.toUpperCase()

    if(tipo =="KIOSCO") {
      return "fa-solid fa-shop card-detalles-highlight"
    }
    if(tipo =="SUPuntoDeVenta") {
      return "fa-solid fa-basket-shopping card-detalles-highlight"
    }
    return "fa-solid fa-pen-ruler card-detalles-highlight"
  }

}
