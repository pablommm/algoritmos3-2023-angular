import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: any; // Propiedad de entrada 'card' para recibir los datos de la tarjeta

  calcularValoracionBase(card: any): number {
    return card.valorPiso + card.valorOnFire + card.valorParidad - card.valorImpresion;
  }  
}

