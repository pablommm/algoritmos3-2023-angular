
/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { RouterTestingModule } from "@angular/router/testing"
import { RouterModule } from '@angular/router'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from 'src/app/pipes/precioSobre.pipe'


import { CardSobresComponent } from './cardSobres.component'
import { PuntoDeVenta } from 'src/app/dominio/puntoDeVenta'

describe('CardSobresComponent', () => {
  let component: CardSobresComponent
  let fixture: ComponentFixture<CardSobresComponent>
  let puntoDeVenta : PuntoDeVenta

  beforeEach(waitForAsync(() => {
    puntoDeVenta = {
      "nombre": "Carrefour",
      "direccion": "Av. San Martin 4930",
      "ubicacionGeografica": "(34.9696; 38.5940)",
      "distancia": "3 kilómetros",
      "stock": 3,
      "precio": "120",
      "tipo": "Supermercado"
    },
    TestBed.configureTestingModule({
      declarations: [ CardSobresComponent, NombreApellidoPipe, PrecioSobrePipe],
      imports: [
        RouterTestingModule, RouterModule.forRoot([]) 
    ],
    })
    
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSobresComponent)
    component = fixture.componentInstance
    component.puntoDeVenta = puntoDeVenta
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
