
import { Component } from '@angular/core'

import { PuntoDeVentaService } from 'src/app/services/puntoDeVenta.service'

@Component({
  selector: 'app-filtro-ordenar-por',
  templateUrl: './filtro-ordenar-por.component.html',
  styleUrls: ['./filtro-ordenar-por.component.scss']
})


export class FiltroOrdenarPorComponent {
  constructor(public puntoDeVentaService: PuntoDeVentaService) {}


  ordernarMenorDistancia(){
    return  this.puntoDeVentaService.todosLosPuntoDeVentas().sort((a,b) => a.distancia - b.distancia)

  }

}

