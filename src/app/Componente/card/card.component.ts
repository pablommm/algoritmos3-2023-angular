import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  listaCards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.listaCards = this.cardService.getCards().map(card => {
      const valoracionBase = this.calcularValoracionBase(
        card.valorPiso,
        card.valorOnFire,
        card.valorParidad,
        card.valorImpresion
      );
      return { ...card, valoracionBase };
    });

    console.log(this.listaCards);
  }

  
  calcularValoracionBase(
    valorPiso: number,
    valorOnFire: number,
    valorParidad: number,
    valorImpresion: number
  ): number {
    return valorPiso + valorOnFire + valorParidad - valorImpresion;
  }
}

