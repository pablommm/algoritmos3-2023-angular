import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UsuarioLogin } from 'src/app/dominio/usuarioLogin'
//import { UsuarioLoginService } from 'src/app/services/usuarioLogin.service'
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
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  title = 'Login'
  usuarioLogin = new UsuarioLogin()

  ingresar() {
    /* if (
      this.validarUsuario() &&
      this.usuarioLoginService.verificarUsuario(this.usuarioLogin)
    ) {
      this.router.navigateByUrl('/BusquedaFiguritas')
    } */

    true
  }

  validarUsuario() {
    return this.validarEmail() && this.validarPassword()
  }

  validarEmail() {
    return this.usuarioLogin.usuario.includes('@')
  }

  validarPassword() {
    return this.usuarioLogin.contrasenia != ''
  }
}
