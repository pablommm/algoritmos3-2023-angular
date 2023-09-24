import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  nav = new Nav()
}

export class Nav{

inicio(){
  alert("vamos al inicio")
}
 figuritas(){
 alert("Desplazamiento a Figuritas")
 }
 perfil(){
  alert("Desplazamiento a Perfil")
 }
 sobres(){
  alert("Desplazamiento a sobres")
 }
 exit(){
  alert("Saliendo... go to login")
 }
}