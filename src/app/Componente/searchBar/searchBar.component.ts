import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buscador= new Buscador

}

export class Buscador {
  criterioDeBusqueda=''

  filtrar(){
    alert("filtrando")
    alert(this.criterioDeBusqueda)
  }
}
