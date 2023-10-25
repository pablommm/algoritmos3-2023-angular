import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CardComponent } from './card.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { DistanciaSobrePipePipe } from 'src/app/pipes/distanciaSobrePipe.pipe'
import { Figurita } from 'src/app/dominio/figurita'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>
  let figurita: Figurita

  beforeEach(() => {
    figurita = {
      nombre: 'Enzo',
      apellido: 'Fernández',
      fechaNacimiento: '17-01-2001',
      numeroCamiseta: 8,
      seleccion: 'Argentina',
      anioDebutSeleccion: 2022,
      altura: 1.78,
      peso: 76,
      posicion: 'Centrocampista',
      pais: 'ARG',
      cotizacionJugador: '131.4 millones de dólares',
      esLider: true,
      estaOnFire: true,
      esPar: false,
      nivelImpresion: 'alto',
      valoracionJugador: 250,
      imagen: '../../assets/enzofe.jpg',
      valorOnFire: () => 1.2,
      valorEsPar: () => 1.1,
      valorNivelImpresion: () => 0.85,
      calcularValoracionBase: () => 0,
      calcularValoracionTotal: () => 0
    }

    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        NombreApellidoPipe,
        PrecioSobrePipe,
        DistanciaSobrePipePipe
      ],
      imports: [RouterTestingModule]
    })

    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance

    component.figurita = figurita

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
