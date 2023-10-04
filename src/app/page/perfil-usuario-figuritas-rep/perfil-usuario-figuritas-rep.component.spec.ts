import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { PerfilUsuarioFiguritasRepComponent } from './perfil-usuario-figuritas-rep.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { ToolBooxComponent } from 'src/app/Componente/tool-boox/tool-boox.component'
import { CardComponent } from 'src/app/Componente/card/card.component'

describe('PerfilUsuarioFiguritasRepComponent', () => {
  let component: PerfilUsuarioFiguritasRepComponent
  let fixture: ComponentFixture<PerfilUsuarioFiguritasRepComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioFiguritasRepComponent, NavComponent, ToolBooxComponent, CardComponent],
      imports: [
        RouterTestingModule 
    ],
    })
    fixture = TestBed.createComponent(PerfilUsuarioFiguritasRepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  
  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Boliviano'
}