import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { FiguritaService } from 'src/app/services/figurita.service'
import { Figurita } from 'src/app/dominio/figurita'

@Component({
  selector: 'app-detallesFigurita',
  templateUrl: './detallesFigurita.component.html',
  styleUrls: ['./detallesFigurita.component.scss']
})
export class DetallesFiguritaComponent implements OnInit {
  figurita!: Figurita
  //figurita: Figurita = this.figuritas[0]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private figuritaService: FiguritaService
  ) {}

  async ngOnInit() {
    const idTarea = this.route.snapshot.params['id']
    this.figurita = await this.figuritaService.getFiguritaById(idTarea)
    /* console.log(this.figurita) */
  }

  volver() {
    this.location.back()
  }
}
