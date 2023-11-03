import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/dominio/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'
import { mostrarError } from '../../util/errorHandler'
import { Router } from '@angular/router'
import { Direccion } from 'src/app/dominio/direccion'
import { DirecionService } from 'src/app/services/direcion.service'

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
  usuario!: Usuario
  errors = []
  constructor(
    //public cosa: Direccion,
    public usuarioService: UsuarioService,
    public cosa: DirecionService,
    private router: Router
  ) {}

  localidadSelecionada = ''
  provinciaSelecionada = ''

  criterioSelecionado = ''
  criterios = [
    'Nacionalista',
    'Conservador',
    'Fanatico',
    'Desprendido',
    'Apostador',
    'Interesado',
    'Conservador'
  ]
  selecciones: string[] = ['Argentina', 'Brasil', 'Portugal']
  seleccionesElegidas = []
  currentUrl = this.router.url

  setProvincia(valor: string) {
    this.provinciaSelecionada = valor
    alert(this.provinciaSelecionada)
    
  }


  async ngOnInit() {
    this.obtenerElUsuario()
     this.direccion = await this.cosa.obtenerDirecion()
    console.log('1' + this.direccion.provincias)
    console.log('2' + this.direccion.localidadesBuenosAires)
    console.log('3' + this.direccion.localidadesMendoza)
    console.log('4' + this.direccion.localidadesCordoba)
    console.log('5' + this.direccion.localidadVacia)
    
  }
  alerta() {
    console.log(this.localidadSelecionada)
    alert(`La provincia seleccionada es ${this.localidadSelecionada}`)
  }
  getLocalidades() {
    switch (this.provinciaSelecionada) {
      case "Buenos Aires":
        return this.direccion.localidadesBuenosAires
      case "Mendoza":
        return this.direccion.localidadesMendoza
      case "Cordoba":
        return this.direccion.localidadesCordoba
      default:
        return "no encontre nada"
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
