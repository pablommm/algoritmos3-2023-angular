import { Component, EventEmitter, Output } from '@angular/core'
import { CriterioOrdenamiento } from 'src/app/dominio/filtro'
@Component({
  selector: 'app-filtro-ordenar-por',
  templateUrl: './filtro-ordenar-por.component.html',
  styleUrls: ['./filtro-ordenar-por.component.scss']
})
export class FiltroOrdenarPorComponent {
  constructor() {}
  @Output() newItemEvent = new EventEmitter<CriterioOrdenamiento>()

  criterioOrdenamiento: CriterioOrdenamiento = CriterioOrdenamiento.MasBarato

  filtrar() {
    alert('FILTRE! :)')
    this.newItemEvent.emit(this.criterioOrdenamiento)
  }

  /* CAMBIAR A ENUM LA IMPLEMENTACION DE LA BUSQUEDA */
}
