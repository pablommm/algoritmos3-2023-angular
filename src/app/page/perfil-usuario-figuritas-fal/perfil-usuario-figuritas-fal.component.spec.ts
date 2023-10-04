import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { PerfilUsuarioFiguritasFalComponent } from './perfil-usuario-figuritas-fal.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { CardComponent } from 'src/app/Componente/card/card.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'

describe('PerfilUsuarioFiguritasFalComponent', () => {
  let component: PerfilUsuarioFiguritasFalComponent
  let fixture: ComponentFixture<PerfilUsuarioFiguritasFalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioFiguritasFalComponent, NavComponent, CardComponent, NombreApellidoPipe, PrecioSobrePipe],
      imports: [
        RouterTestingModule 
    ],
    })
    fixture = TestBed.createComponent(PerfilUsuarioFiguritasFalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
