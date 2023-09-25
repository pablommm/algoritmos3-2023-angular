import { Component, OnInit } from '@angular/core'
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.css']
})

export class BusquedaFiguritasComponent implements OnInit {
  listaCards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    // Obtener los datos de las tarjetas desde el servicio
    this.listaCards = this.cardService.getCardsWithValoracionBase();
  }
}

