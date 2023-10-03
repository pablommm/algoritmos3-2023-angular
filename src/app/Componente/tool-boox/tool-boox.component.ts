import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-boox',
  templateUrl: './tool-boox.component.html',
  styleUrls: ['./tool-boox.component.css']
})
export class ToolBooxComponent implements OnInit {

  constructor() { }
  datosDePerfil = new DatosDePerfil()
  ngOnInit() {
  }

}

export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Boliviano'
}
