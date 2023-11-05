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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer: any

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
    this.router.navigate(['/BusquedaFiguritas'])
  }

  solicitar() {
    this.figuritaService.solicitarFigurita(this.figurita)
    this.timer = setInterval(() => {
      this.volver()
    }, 200) // Update the counter every second
  }

  ngOnDestroy() {
    clearInterval(this.timer) // Clear the timer when the component is destroyed
  }
}
