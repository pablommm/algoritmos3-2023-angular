import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FiguritaUsuario } from 'src/app/dominio/figurita'
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

  @Input() figurita!: FiguritaUsuario
  @Output() newItemEvent = new EventEmitter<number>()

  OnInit() {}

  rutaDelete() {
    return (
      this.currentUrl === '/BusquedaFiguritas' ||
      this.currentUrl === '/BusquedaFiguritasPerfil'
    )
  }
  ruta() {
    return this.currentUrl === '/BusquedaFiguritas'
  }

  quitarFigurita() {
    this.newItemEvent.emit(this.figurita.getId())
  }
}
