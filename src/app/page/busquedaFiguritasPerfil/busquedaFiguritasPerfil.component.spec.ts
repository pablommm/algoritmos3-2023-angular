/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil.component'

describe('BusquedaFiguritasPerfilComponent', () => {
  let component: BusquedaFiguritasPerfilComponent
  let fixture: ComponentFixture<BusquedaFiguritasPerfilComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaFiguritasPerfilComponent ]
    })
    .compileComponents()
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
