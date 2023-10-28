import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { PerfilUsuarioFiguritasRepComponent } from './perfil-usuario-figuritas-rep.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { CardComponent } from 'src/app/Componente/card/card.component'
import { TabComponent } from 'src/app/Componente/tab/tab.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { DistanciaSobrePipePipe } from 'src/app/pipes/distanciaSobrePipe.pipe'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('PerfilUsuarioFiguritasRepComponent', () => {
  let component: PerfilUsuarioFiguritasRepComponent
  let fixture: ComponentFixture<PerfilUsuarioFiguritasRepComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PerfilUsuarioFiguritasRepComponent,
        NavComponent,
        CardComponent,
        TabComponent,
        NombreApellidoPipe,
        PrecioSobrePipe,
        DistanciaSobrePipePipe
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    fixture = TestBed.createComponent(PerfilUsuarioFiguritasRepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

export class DatosDePerfil {
  nombreUsuario = 'pepe'
  nombre = 'Pepe'
  apellido = 'Perez'
  edad = '20'
  pais = 'Boliviano'
}
