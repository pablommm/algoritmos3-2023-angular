import { Component, OnInit } from '@angular/core';
import { FiguritaService } from '../../services/figurita.service';

@Component({
  selector: 'app-busquedaFiguritas',
  templateUrl: './busquedaFiguritas.component.html',
  styleUrls: ['./busquedaFiguritas.component.css']
})
export class BusquedaFiguritasComponent implements OnInit {

  listaCards: any[] = [];
  
  constructor(private figuritaService : FiguritaService) {
    this.figuritaService.loadFiguritas().subscribe((res : any) => {
      alert(JSON.stringify(res))
      this.listaCards = res
    })
  }

  ngOnInit() {
    this.figuritaService.loadFiguritas();
    /* this.listaCards = this.figuritaService.getFiguritas(); */
  }

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

