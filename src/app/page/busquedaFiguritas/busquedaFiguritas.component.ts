import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.css']
})

export class BusquedaFiguritasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


class Card {
  constructor(
  public nombre: string,
  public peso: number,
  public cotizacion: number){}
}
