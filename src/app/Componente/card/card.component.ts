import { Component, Input } from '@angular/core'
import { Figurita } from 'src/app/dominio/figurita'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Figurita
 
}