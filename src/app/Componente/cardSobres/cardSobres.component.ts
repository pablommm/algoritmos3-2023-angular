/* import { supermercado } from './../../mocks/listaSupermercados' */
import { Component, Input } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { Supermercado } from 'src/app/dominio/supermercado'

@Component({
  selector: 'app-cardSobres',
  templateUrl: './cardSobres.component.html',
  styleUrls: ['./cardSobres.component.css']
})

export class CardSobresComponent {

  constructor(private router: Router, private route :ActivatedRoute) {}
  
  @Input() cardSobres!: Supermercado

  iconoPuntoDeVenta(supermercado: Supermercado) {
    const tipo = supermercado.tipo.toUpperCase()

    if(tipo =="KIOSCO") {
      return "fa-solid fa-shop card-detalles-highlight"
    }
    if(tipo =="SUPERMERCADO") {
      return "fa-solid fa-basket-shopping card-detalles-highlight"
    }
    return "fa-solid fa-pen-ruler card-detalles-highlight"
  }

}
