import { Component, Input } from '@angular/core'
import {
  CriterioOrdenamiento,
  FiltroPuntosDeVenta
} from 'src/app/dominio/filtro'
@Component({
  selector: 'app-filtro-ordenar-por',
  templateUrl: './filtro-ordenar-por.component.html',
  styleUrls: ['./filtro-ordenar-por.component.scss']
})
export class FiltroOrdenarPorComponent {
  constructor() {}
  @Input() filtro!: FiltroPuntosDeVenta

  criterioOrdenamiento: CriterioOrdenamiento =
    CriterioOrdenamiento.MenorDistancia

  filtrar() {
    /* alert('FILTRE! :)') */
    /* this.newItemEvent.emit(this.criterioOrdenamiento) */
  }

  /* CAMBIAR A ENUM LA IMPLEMENTACION DE LA BUSQUEDA */
}
