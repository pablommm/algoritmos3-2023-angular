import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CardComponent } from './card.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { Figurita } from 'src/app/dominio/figurita'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>
  let figurita: Figurita

  beforeEach(() => {
    figurita = {
      imagen: '../../assets/cristiano.jpg',
      nombre: 'Cristiano',
      apellido: 'Ronaldo',
      fechaNacimiento: '17 de febrero',
      numeroCamiseta: 7,
      seleccion: 'Portugal',
      anioDebutSeleccion: 2003,
      altura: 1.85,
      peso: 80,
      posicion: 'Delantero',
      pais: 'Portugal',
      cotizacionJugador: '500 millones de euros',
      esLider: true,
      estaOnFire: true,
      esPar: false,
      nivelImpresion: 'bajo',
      valoracionJugador: 300
    }

    TestBed.configureTestingModule({
      declarations: [CardComponent, NombreApellidoPipe, PrecioSobrePipe],
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
