import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(){
    return [
      { valorPiso: 100, valorOnFire: 20, valorParidad: 12, valorImpresion: 19.8 },
      { valorPiso: 100, valorOnFire: 0, valorParidad: 0, valorImpresion: 15 },
      { valorPiso: 100, valorOnFire: 0, valorParidad: 10, valorImpresion: 16.5 },
      { valorPiso: 100, valorOnFire: 20, valorParidad: 12, valorImpresion: 0 }
    ]
  }

}
