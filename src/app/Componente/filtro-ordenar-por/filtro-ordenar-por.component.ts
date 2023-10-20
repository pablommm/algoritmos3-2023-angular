import { Component } from '@angular/core'

@Component({
  selector: 'app-filtro-ordenar-por',
  templateUrl: './filtro-ordenar-por.component.html',
  styleUrls: ['./filtro-ordenar-por.component.scss']
})
export class FiltroOrdenarPorComponent {}
/*
  onRadioChange(event) {
    // Obtén el valor del input radio seleccionado
    const radioValue = event.target.value

    // Ejecuta la lógica correspondiente al valor del input radio seleccionado
    switch (radioValue) {
      case 'Menor distancia':
        this.radioValue = this.puntoDeVentaService
          .todosLosPuntoDeVentas()
          .sort((a, b) => a.distancia - b.distancia)
        break
      case 'Más Barato':
        this.radioValue = this.puntoDeVentaService
          .todosLosPuntoDeVentas()
          .sort((a, b) => a.precio - b.precio)
        break
      case 'Más Sobres':
        this.radioValue = this.puntoDeVentaService
          .todosLosPuntoDeVentas()
          .sort((a, b) => a.stock - b.stock)
        break
      case 'Solo los más cercanos':
        // Completa la lógica
        break
    }
  }/

/
  ordernarMenorDistancia(){
    return  this.puntoDeVentaService.todosLosPuntoDeVentas().sort((a,b) => a.distancia - b.distancia)
  }

  ordernarMasBarato(){
    return  this.puntoDeVentaService.todosLosPuntoDeVentas().sort((a,b) => a.precio - b.precio)
  }

  ordernarMasSobres(){
    return  this.puntoDeVentaService.todosLosPuntoDeVentas().sort((a,b) => a.stock - b.stock)
  }

  ordernarMasCercanos(){
    return  this.puntoDeVentaService.todosLosPuntoDeVentas() //completar logica
  }

}

*/
