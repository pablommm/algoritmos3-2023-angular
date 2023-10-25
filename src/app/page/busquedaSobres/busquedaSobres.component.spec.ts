/* import { HttpClientModule } from '@angular/common/http' */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { BusquedaSobresComponent } from './busquedaSobres.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { RouterTestingModule } from '@angular/router/testing'
import { SearchBarComponent } from 'src/app/Componente/searchBar/searchBar.component'
import { FiltroComponent } from 'src/app/Componente/filtro/filtro.component'
import { FiltroOrdenarPorComponent } from 'src/app/Componente/filtro-ordenar-por/filtro-ordenar-por.component'
import { CardSobresComponent } from 'src/app/Componente/cardSobres/cardSobres.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { DistanciaSobrePipePipe } from 'src/app/pipes/distanciaSobrePipe.pipe'
import { FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('BusquedaSobresComponent', () => {
  let component: BusquedaSobresComponent
  let fixture: ComponentFixture<BusquedaSobresComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusquedaSobresComponent,
        NavComponent,
        SearchBarComponent,
        FiltroComponent,
        FiltroOrdenarPorComponent,
        CardSobresComponent,
        NombreApellidoPipe,
        PrecioSobrePipe,
        DistanciaSobrePipePipe
      ],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaSobresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
