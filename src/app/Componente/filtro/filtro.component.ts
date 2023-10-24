import { Component } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
import { Filtro } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Output() newItemEvent = new EventEmitter()

  filtro = new Filtro()

  filtrar() {
    alert('FILTRE! :)')
    this.newItemEvent.emit(this.filtro)
  }
}
