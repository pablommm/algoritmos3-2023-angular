import { Component } from '@angular/core'
import {CardService} from '../../services/card.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  listaCards!: any[]
  
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.listaCards = this.cardService.getCards()
  }
  
  card = new Card()
}

/* const VALORACION_PISO = 100  */
class Card {

  valoracionBase(valorPiso:number, valorOnFire:number, valorParidad:number, valorImpresion:number) {
    return valorPiso + valorOnFire + valorParidad - valorImpresion
  }

}

