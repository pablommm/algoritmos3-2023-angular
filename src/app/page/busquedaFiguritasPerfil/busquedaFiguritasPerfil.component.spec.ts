/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { RouterTestingModule } from "@angular/router/testing"
import { SearchBarComponent } from 'src/app/Componente/searchBar/searchBar.component'
import { FiltroComponent } from 'src/app/Componente/filtro/filtro.component'
import { CardComponent } from 'src/app/Componente/card/card.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { FormsModule } from '@angular/forms';

describe('BusquedaFiguritasPerfilComponent', () => {
  let component: BusquedaFiguritasPerfilComponent
  let fixture: ComponentFixture<BusquedaFiguritasPerfilComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasPerfilComponent, NavComponent, SearchBarComponent, FiltroComponent, CardComponent, NombreApellidoPipe, PrecioSobrePipe],
      imports: [
        RouterTestingModule, FormsModule 
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
