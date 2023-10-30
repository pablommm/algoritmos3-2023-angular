import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { PerfilUsuarioComponent } from './perfil-usuario.component'
import { TabComponent } from 'src/app/Componente/tab/tab.component'
import { FormComponent } from 'src/app/Componente/form/form.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms'

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent
  let fixture: ComponentFixture<PerfilUsuarioComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PerfilUsuarioComponent,
        NavComponent,
        TabComponent,
        FormComponent
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
    fixture = TestBed.createComponent(PerfilUsuarioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('se valida que el cambio de nombre de usuario realmente funcione', () => {
    // defino nombres viejos y nuevo
    component.cambioDeUsuario.nombreUsuario = 'pepe'
    component.cambioDeUsuario.nuevoNombreUsuario = 'Guachin'

    // realizo accion
    component.cambioDeUsuario.hizoClick()
    component.cambioDeUsuario.guardar()
    // espero resultado
    expect(component.cambioDeUsuario.nombreUsuario).toBe('Guachin')
  })
})
