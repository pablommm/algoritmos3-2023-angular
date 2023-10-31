import { Component, Input } from '@angular/core'
import { Figurita } from 'src/app/dominio/figurita'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  currentUrl = this.router.url
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  imagenNoEncontrada = '../assets/noImage.jpg'

  @Input() figurita!: Figurita

  OnInit() {}

  selecionarCard() {
    this.router.navigateByUrl('/DetalleFigurita')
  }

  rutaDelete() {
    return this.currentUrl === '/BusquedaFiguritas'
  }
  ruta() {
    return this.currentUrl === '/BusquedaFiguritas'
  }
}
