import { SeleccionService } from './../../services/Seleccion.service'
//import { JugadorService } from './../../services/Jugador.service'
import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/dominio/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'
import { mostrarError } from '../../util/errorHandler'
import { Router } from '@angular/router'
import { Direccion } from 'src/app/dominio/direccion'
import { DirecionService } from 'src/app/services/direcion.service'
import { Seleccion } from 'src/app/dominio/Seleccion'
//import { Jugador } from 'src/app/dominio/Jugador'

export const errorHandler = (component: FormComponent) => ({
  error: async (error: Error) => {
    component.usuario = await component.usuarioService.elUsuario()
    mostrarError(component, error)
  }
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  actualizarFecha(fecha: Date) {
    this.usuario.fechaDeNacimiento = fecha
  }

  direccion!: Direccion
  seleccion!: Seleccion
  usuario!: Usuario
  errors = []
  constructor(
    //public cosa: Direccion,
    public usuarioService: UsuarioService,
    public direcionService: DirecionService,
    private router: Router,
    public seleccionService: SeleccionService
  ) {}

  localidadSelecionada = ''
  provinciaSelecionada = ''
  criterioSelecionado = ''
  selecciones: Array<Seleccion> = []
  seleccionesElegidas = []
  currentUrl = this.router.url

  setProvincia(valor: string) {
    this.provinciaSelecionada = valor
    alert(this.provinciaSelecionada)
  }

  async ngOnInit() {
    this.obtenerElUsuario()
    this.direccion = await this.direcionService.obtenerDirecion()
    this.selecciones = await this.seleccionService.todasLasSelecciones()
    console.log('se completo el nOnInit')
  }
  alerta() {
    console.log(this.selecciones)
    alert(`La provincia seleccionada es ${this.selecciones}`)
  }
  getLocalidades() {
    switch (this.provinciaSelecionada) {
      case 'Buenos Aires':
        return this.direccion.localidadesBuenosAires
      case 'Mendoza':
        return this.direccion.localidadesMendoza
      case 'Cordoba':
        return this.direccion.localidadesCordoba
      default:
        return 'no encontre nada'
    }
  }

  async obtenerElUsuario() {
    try {
      this.usuario = await this.usuarioService.usuarioLogueado()
      /* alert(this.usuario) */
    } catch (error) {
      mostrarError(this, error)
    }
  }

  setCriterio(valor: string) {
    this.criterioSelecionado = valor
  }
  esNacionalista() {
    if (this.criterioSelecionado === 'Nacionalista') {
      return this.currentUrl === '/Perfil/padinfo'
    } else {
      return false
    }
  }
}
