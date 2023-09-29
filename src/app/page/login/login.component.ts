import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
//import { login } from './maquetado/css/login.css'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls : ['./login.component.scss',]
  styleUrls: [
  '../../../../Maquetado/css/footer.css',
  '../../../../Maquetado/css/input.css',
  '../../../../Maquetado/css/button.css',
  '../../../../Maquetado/css/login.css'

]
})

export class LoginComponent {
  constructor(private router: Router, private route :ActivatedRoute) {}
  title = 'Login'

  usuario = ""
  password = ""

  ingresar(){
    if(this.validarUsuario() === true){
      this.router.navigateByUrl('/BusquedaFiguritas')
    } else{
      alert("esta todo mal")
    }

  }

  validarUsuario(){
    if (this.validarEmail() && this.validarPassword()) {
      
      return true
    }else {
    return false
  }
  }

  validarEmail(){
    if(this.usuario.includes("@")){
      return true
    }else {
      return false
    }
  }

  validarPassword(){
    if(this.password != ""){
      
      return true
    }else{
      console.log("la contrasena no debe ser vacia")
      return false
    }
  }
}
