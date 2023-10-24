/* export class Filtro {
  criterioDeBusqueda = ''
  filtrar() {
    alert('filtrando')
    alert(this.criterioDeBusqueda)
  }
}

export class Buscador {}
 */

export class Filtros {
  public searchBar!: SearchBar
  public filtro!: Filtro
  public filtroOrdenarPor!: FiltroOrdenarPor

  setSearchBar(searchbar: SearchBar) {
    this.searchBar = searchbar
  }

  setFiltro(filtro: Filtro) {
    this.filtro = filtro
  }

  /* llamadoASearchbar() {
    return this.searchbar
  }

  llamadoAFiltros() {
    return this.filtro
  }

  llamarAOrdenarPor() {
    return this.filtroOrdenarPor
  } */
  /*
    static fromJson(filtro: object): DominioFiltro {
      return Object.assign(new DominioFiltro(), filtro)
    }
*/
}

export class SearchBar {
  criterioDeBusqueda = ''

  filtrar() {
    alert('filtrando')
    alert(this.criterioDeBusqueda)
  }
}

export class Filtro {
  desde = ''
  hasta = ''
  esPromesa = false
  esOnFire = false

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
}

export class FiltroOrdenarPor {
  selecionOrden: string = ''

  selecionaronOrden(parametro: string) {
    this.selecionOrden = parametro
    console.log(this.selecionOrden)
  }
}
