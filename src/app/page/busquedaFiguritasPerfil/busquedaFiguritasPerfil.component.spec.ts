/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'

describe('BusquedaFiguritasPerfilComponent', () => {
  let component: BusquedaFiguritasPerfilComponent
  let fixture: ComponentFixture<BusquedaFiguritasPerfilComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasPerfilComponent, NavComponent] 
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaFiguritasPerfilComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
