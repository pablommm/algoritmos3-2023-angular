import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardComponent } from './../Componente/card/card.component'
import { Figurita } from '../dominio/figurita'
import { ActivatedRouteStub } from '../activatedRouteStub'
import { RouterTestingModule } from '@angular/router/testing'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { DistanciaSobrePipePipe } from '../pipes/distanciaSobrePipe.pipe'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>
  let component: CardComponent
  const activatedRouteStub = new ActivatedRouteStub()

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        NombreApellidoPipe,
        PrecioSobrePipe,
        DistanciaSobrePipePipe
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: activatedRouteStub, useValue: activatedRouteStub } // Proporciona ActivatedRouteStub como valor para ActivatedRoute.
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance

    const figuritaData: Figurita = new Figurita()
    figuritaData.nombre = 'Cristiano'
    figuritaData.apellido = 'Ronaldo'
    figuritaData.fechaNacimiento = '17 de febrero'
    figuritaData.numeroCamiseta = 7
    figuritaData.seleccion = 'Portugal'
    figuritaData.anioDebut = 2003
    figuritaData.altura = 1.85
    figuritaData.peso = 80
    figuritaData.posicion = 'Delantero'
    figuritaData.pais = 'Portugal'
    figuritaData.cotizacionJugador = '500 millones de euros'
    figuritaData.onFire = true
    figuritaData.nivelDeImpresion = 'bajo'
    figuritaData.valoracionFigurita = 300

    component.figurita = figuritaData

    fixture.detectChanges()
  })

  it('debería mostrar correctamente la valoración total', () => {
    const valoracionTotalElement = fixture.nativeElement.querySelector(
      '.card-detalles-largeFont .fa-solid.fa-star + span'
    )

    expect(valoracionTotalElement.textContent.trim()).toBe('300')
  })
})
