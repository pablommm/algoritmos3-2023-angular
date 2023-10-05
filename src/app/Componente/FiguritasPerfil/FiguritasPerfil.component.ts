import { Component, OnInit } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { Figurita } from './../../dominio/figurita'
import { FiguritaService } from '../../services/figurita.service'
import { mostrarError } from '../../util/errorHandler'


@Component({
  selector: 'app-FiguritasPerfil',
  templateUrl: './FiguritasPerfil.component.html',
  styleUrls: ['./FiguritasPerfil.component.css']
})
export class FiguritasPerfilComponent implements OnInit {

  listaFiguritas: Array<Figurita> = []

  constructor(private router: Router, private route :ActivatedRoute, public figuritaService : FiguritaService) {}
  ngOnInit() {
    this.obtenerTodasLasFiguritas()
  }
  obtenerTodasLasFiguritas() {
    try {
      this.listaFiguritas = this.figuritaService.todasLasFiguritas()
    } catch (error) {
      mostrarError(this, error)
  }

 
}

}


