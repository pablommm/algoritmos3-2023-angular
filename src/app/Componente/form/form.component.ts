import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/dominio/usuario'
import { UsuarioService } from 'src/app/services/usuario.service'
import { mostrarError } from '../../util/errorHandler'
import { Router } from '@angular/router'

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
  usuario!: Usuario
  errors = []
  constructor(
    public usuarioService: UsuarioService,
    private router: Router
  ) {}

  localidadSelecionada = ''
  provinciaSelecionada = ''
  provincias = ['Buenos Aires', 'Cordoba', 'Mendoza']
  localidadesBuenosAires: string[] = [
    'La Matanza',
    'La Plata',
    'Lanús',
    'Lomas de Zamora'
  ]
  localidadesCordoba: string[] = [
    'Río Cuarto',
    'Córdoba',
    'Villa María',
    'Morteros'
  ]
  localidadesMendoza: string[] = [
    'Mendoza',
    'San Rafael',
    'Godoy Cruz',
    'Guaymallén'
  ]
  localidadvacia: string[] = []
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
  }

  getLocalidades() {
    switch (this.provinciaSelecionada) {
      case 'Buenos Aires':
        return this.localidadesBuenosAires
      case 'Mendoza':
        return this.localidadesMendoza
      case 'Cordoba':
        return this.localidadesCordoba
      default:
        return this.localidadvacia
    }
  }

  ngOnInit() {
    this.obtenerElUsuario()
  }

  obtenerElUsuario() {
    try {
      this.usuario = this.usuarioService.elUsuario()
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
