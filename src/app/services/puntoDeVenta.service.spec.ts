/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing'
import { CardSobresComponent } from '../Componente/cardSobres/cardSobres.component'
import { ActivatedRouteStub } from '../activatedRouteStub'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'
import { DistanciaSobrePipePipe } from '../pipes/distanciaSobrePipe.pipe'
import { PuntoDeVenta } from '../dominio/puntoDeVenta'

describe('Service: PuntoDeVentaService', () => {
  let fixture: ComponentFixture<CardSobresComponent>
  let component: CardSobresComponent
  const activatedRouteStub = new ActivatedRouteStub()

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        CardSobresComponent,
        PrecioSobrePipe,
        DistanciaSobrePipePipe
      ],
      imports: [RouterTestingModule],
      providers: [
        { provide: activatedRouteStub, useValue: activatedRouteStub } // Proporciona ActivatedRouteStub como valor para ActivatedRoute.
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSobresComponent)
    component = fixture.componentInstance

    const puntoDeVentaData: PuntoDeVenta = new PuntoDeVenta()
    puntoDeVentaData.nombre = 'Carrefour'
    puntoDeVentaData.direccion = 'Av. San Martin 4930'
    puntoDeVentaData.ubicacionGeograficaX = 34.9696
    puntoDeVentaData.ubicacionGeograficaY = 38.594
    puntoDeVentaData.distancia = 3
    puntoDeVentaData.stockDeSobres = 3
    puntoDeVentaData.importeACobrar = 120
    puntoDeVentaData.tipo = 'Supermercado'

    component.puntoDeVenta = puntoDeVentaData

    fixture.detectChanges()
  })

  it('debería mostrar el icono de supermercado', () => {
    const iconoSupermercado = fixture.nativeElement.querySelector(
      '.card-upper-subcontainer i'
    )

    expect(iconoSupermercado.className).toContain(
      'card-detalles-highlight fa-basket-shopping'
    )
  })
})
