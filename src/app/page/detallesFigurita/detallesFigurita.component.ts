import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { FiguritaService } from 'src/app/services/figurita.service'
import { FiguritaUsuario } from 'src/app/dominio/figurita'

@Component({
  selector: 'app-detallesFigurita',
  templateUrl: './detallesFigurita.component.html',
  styleUrls: ['./detallesFigurita.component.scss']
})
export class DetallesFiguritaComponent implements OnInit {
  figurita: FiguritaUsuario = new FiguritaUsuario()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private figuritaService: FiguritaService
  ) {}

  async ngOnInit() {
    const idFigurita = this.route.snapshot.params['id']
    //const idUsuario = this.route.snapshot.params['idUsuario']
    this.figurita = await this.figuritaService.getFiguritaById(idFigurita)
    console.log(this.figurita)
  }

  volver() {
    this.location.back()
  }

  solicitar() {
    this.figuritaService.solicitarFigurita(this.figurita)
    this.volver()
  }
}
