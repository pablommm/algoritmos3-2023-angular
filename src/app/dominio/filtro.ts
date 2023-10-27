import { HttpParams } from '@angular/common/http'

abstract class Filtro {
  campoDeBusqueda = ''
  asHttpParams() {}
}

export class FiltroFiguritas extends Filtro {
  desde = 0
  hasta = 0
  esPromesa = false
  esOnFire = false

  validacionHasta() {
    if (this.desde >= 0 && this.hasta >= 0) {
      if (this.desde > this.hasta) {
        alert('El valor del campo desde no puede ser menor que el de hasta')
      }
    }
  }

  busqueda() {
    this.validacionHasta()
    alert(this.desde + '....' + this.hasta)
  }

  override asHttpParams(): HttpParams {
    const params = new HttpParams()
      .set('campoDeBusqueda', this.campoDeBusqueda)
      .set('desde', this.desde)
      .set('hasta', this.hasta)
      .set('esPromesa', this.esPromesa)
      .set('esOnFire', this.esOnFire)

    return params
  }
}

export class FiltroPuntosDeVenta extends Filtro {
  criterioOrdenamiento: string = CriterioOrdenamiento.MenorDistancia

  selecionaronOrden(parametro: string) {
    this.criterioOrdenamiento = parametro
    console.log(this.criterioOrdenamiento)
  }

  override asHttpParams(): HttpParams {
    const params = new HttpParams()
      .set('campoDeBusqueda', this.campoDeBusqueda)
      .set('criterioOrdenamiento', this.criterioOrdenamiento)

    return params
  }
}

export enum CriterioOrdenamiento {
  MenorDistancia = 'MenorDistancia',
  MasBarato = 'MasBarato',
  MasSobres = 'MasSobres',
  MasCercano = 'MasCercano'
}
