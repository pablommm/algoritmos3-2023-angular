import { Component, EventEmitter, Output } from '@angular/core'
import { SearchBar } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<SearchBar>()

  searchbar = new SearchBar()

  filtrar() {
    alert('FILTRE! :)')
    this.newItemEvent.emit(this.searchbar)
  }

  /* buscador= new Buscador */
}
