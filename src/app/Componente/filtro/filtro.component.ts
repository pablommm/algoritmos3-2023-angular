import { Component, Input } from '@angular/core'
import { FiltroFiguritas } from 'src/app/dominio/filtro'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Input() filtro!: FiltroFiguritas

  filtrar() {
    /* alert('FILTRE! :)') */
  }
}
