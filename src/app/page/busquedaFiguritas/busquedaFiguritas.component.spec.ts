/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { NavComponent } from 'src/app/Componente/nav/nav.component'

import { BusquedaFiguritasComponent } from './busquedaFiguritas.component'

describe('BusquedaFiguritasComponent', () => {
  let component: BusquedaFiguritasComponent
  let fixture: ComponentFixture<BusquedaFiguritasComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasComponent, NavComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaFiguritasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
