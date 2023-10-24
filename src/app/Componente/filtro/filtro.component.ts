import { Component, Input } from '@angular/core'
import { Filtro } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Input() filtro!: Filtro

  filtrar() {
    alert('FILTRE! :)')
  }
}
