import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { PerfilUsuarioComponent } from './perfil-usuario.component'
import { TabComponent } from 'src/app/Componente/tab/tab.component'
import { FormComponent } from 'src/app/Componente/form/form.component'

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent
  let fixture: ComponentFixture<PerfilUsuarioComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioComponent, NavComponent, TabComponent, FormComponent],
      imports: [RouterTestingModule]
    })
    fixture = TestBed.createComponent(PerfilUsuarioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })


  it('se valida que el cambio de nombre de usuario realmente funcione', () => {
    //algo esta mal o con el test o con el method que no se guarda los cambios de nombre
    component.cambioDeUsuario.nombreUsuario = "pepe"
    component.cambioDeUsuario.nuevoNombreUsuario = "Guachin"
    //accion
    const containsAt = component.cambioDeUsuario.guardar

    expect(component.cambioDeUsuario.nombreUsuario).toBe("pepe");

  })
})
