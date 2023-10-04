import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { PerfilUsuarioComponent } from './perfil-usuario.component'
describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent
  let fixture: ComponentFixture<PerfilUsuarioComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioComponent, NavComponent, ],
      imports: [RouterTestingModule]
    })
    fixture = TestBed.createComponent(PerfilUsuarioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
