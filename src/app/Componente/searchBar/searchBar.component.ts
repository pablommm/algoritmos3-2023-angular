import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<string>()

  criterioDeBusqueda = ''

  filtrar() {
    alert('FILTRE! :)')
    this.newItemEvent.emit(this.criterioDeBusqueda)
  }

  /* buscador= new Buscador */
}
