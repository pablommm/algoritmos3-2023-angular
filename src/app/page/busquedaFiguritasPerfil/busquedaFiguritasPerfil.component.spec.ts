/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { RouterTestingModule } from "@angular/router/testing"
import { SearchBarComponent } from 'src/app/Componente/searchBar/searchBar.component'
import { FiltroComponent } from 'src/app/Componente/filtro/filtro.component'
import { CardComponent } from 'src/app/Componente/card/card.component'

describe('BusquedaFiguritasPerfilComponent', () => {
  let component: BusquedaFiguritasPerfilComponent
  let fixture: ComponentFixture<BusquedaFiguritasPerfilComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasPerfilComponent, NavComponent, SearchBarComponent, FiltroComponent, CardComponent],
      imports: [
        RouterTestingModule 
    ],
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
