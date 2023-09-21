import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCardsWithValoracionBase() {
    const cards = [
      { valorPiso: 100, valorOnFire: 20, valorParidad: 12, valorImpresion: 19.8 },
      { valorPiso: 100, valorOnFire: 0, valorParidad: 0, valorImpresion: 15 },
      { valorPiso: 100, valorOnFire: 0, valorParidad: 10, valorImpresion: 16.5 },
      { valorPiso: 100, valorOnFire: 20, valorParidad: 12, valorImpresion: 0 }
    ];

    // Calcular la valoración base para cada tarjeta
    const cardsWithValoracionBase = cards.map(card => {
      const valoracionBase = this.calcularValoracionBase(
        card.valorPiso,
        card.valorOnFire,
        card.valorParidad,
        card.valorImpresion
      );
      return { ...card, valoracionBase };
    });

    return cardsWithValoracionBase;
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
