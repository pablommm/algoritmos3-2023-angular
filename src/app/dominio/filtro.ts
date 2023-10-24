export class Filtro {
  desde = ''
  hasta = ''
  esPromesa = false
  esOnFire = false
  campoDeBusqueda = ''
  criterioOrdenamiento: string = ''

  validacionHasta() {
    if (this.desde != '' && this.hasta != '') {
      if (this.desde > this.hasta) {
        alert('El valor del campo desde no puede ser menor que el de hasta')
      }
    }
  }

  busqueda() {
    this.validacionHasta()
    alert(this.desde + '....' + this.hasta)
  }

  selecionaronOrden(parametro: string) {
    this.criterioOrdenamiento = parametro
    console.log(this.criterioOrdenamiento)
  }
}

export enum CriterioOrdenamiento {
  MenorDistancia = 'MenorDistancia',
  MasBarato = 'MasBarato',
  MasSobres = 'MasSobres',
  MasCercano = 'MasCercano'
}
