import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-busquedaFiguritasPerfil',
  templateUrl: './busquedaFiguritasPerfil.component.html',
  styleUrls: ['./busquedaFiguritasPerfil.component.css']
})
export class BusquedaFiguritasPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filtros=new Filtros()

}
export class Filtros{
  desde=''
  hasta=''
  esPromesa=false
  esOnFire=false


  validacionHasta(){
    if(this.desde !='' && this.hasta!=''){
       if (this.desde > this.hasta){
        alert('El valor del campo desde no puede ser menor que el de hasta')
  }
  }
}
cambiarEsOnFire() {
  this.esOnFire = !this.esOnFire
  alert(this.esOnFire)
}
/*cambiarEsPromesa(Event) {
  this.esPromesa = event.target.checked
  alert(this.esPromesa)
}*/
  busqueda(){
    this.validacionHasta()
    alert(this.desde +"...." +this.hasta)
  }
}

