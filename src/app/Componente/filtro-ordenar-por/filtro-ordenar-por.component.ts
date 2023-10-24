import { FiltroOrdenarPor } from './../../dominio/filtro'
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-filtro-ordenar-por',
  templateUrl: './filtro-ordenar-por.component.html',
  styleUrls: ['./filtro-ordenar-por.component.scss']
})
export class FiltroOrdenarPorComponent {
  constructor() {}
  @Output() newItemEvent = new EventEmitter<string>()

  filtroOrdenarPor = new FiltroOrdenarPor()
}
