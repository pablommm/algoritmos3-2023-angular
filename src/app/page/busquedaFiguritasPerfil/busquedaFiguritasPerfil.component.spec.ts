import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil.component'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { SearchBarComponent } from 'src/app/Componente/searchBar/searchBar.component'
import { RouterTestingModule } from "@angular/router/testing"
import { FiltroComponent } from 'src/app/Componente/filtro/filtro.component'
import { CardComponent } from 'src/app/Componente/card/card.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { FormsModule } from '@angular/forms'

describe('BusquedaFiguritasComponent', () => {
  let component: BusquedaFiguritasPerfilComponent
  let fixture: ComponentFixture<BusquedaFiguritasPerfilComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaFiguritasPerfilComponent, NavComponent, SearchBarComponent, FiltroComponent, CardComponent, NombreApellidoPipe],
      imports: [RouterTestingModule, FormsModule],
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
