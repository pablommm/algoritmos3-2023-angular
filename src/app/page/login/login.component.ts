import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { UsuarioLoginService } from 'src/app/services/usuarioLogin.service'
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

  usuarioLoginService: UsuarioLoginService = new UsuarioLoginService

  usuario = ""
  password = ""

  ingresar(){
    if(this.validarUsuario() && this.usuarioLoginService.verificarUsuario({usuario: this.usuario.toLowerCase(), contrasenia: this.password})){
      this.router.navigateByUrl('/BusquedaFiguritas')
    }
  }

  validarUsuario(){
    return (this.validarEmail() && this.validarPassword())
  }

  validarEmail(){
    if(this.usuario.includes("@")){
      return true
    } else {
      alert("El usuario debe contener @")
      return false
    }
  }

  validarPassword(){
    if(this.password != ""){
      return true
    }else{
      alert("La contraseña no puede ser vacía")
      return false
    }
  }
}
