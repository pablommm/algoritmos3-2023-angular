/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { SearchBarComponent } from 'src/app/Componente/searchBar/searchBar.component'
import { RouterTestingModule } from "@angular/router/testing"
import { FiltroComponent } from 'src/app/Componente/filtro/filtro.component'
import { CardComponent } from 'src/app/Componente/card/card.component'

import { BusquedaFiguritasComponent } from './busquedaFiguritas.component'

describe('BusquedaFiguritasComponent', () => {
  let component: BusquedaFiguritasComponent
  let fixture: ComponentFixture<BusquedaFiguritasComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasComponent, NavComponent, SearchBarComponent, FiltroComponent, CardComponent],
      imports: [RouterTestingModule],
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
