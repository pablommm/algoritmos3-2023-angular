import { Component } from '@angular/core'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {



filtros= new Filtros()
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

  busqueda(){
    this.validacionHasta()
    alert(this.desde +"...." +this.hasta)
  }
}
