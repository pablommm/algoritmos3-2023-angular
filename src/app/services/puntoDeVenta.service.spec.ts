/* tslint:disable:no-unused-variable */
import { PuntoDeVentaService } from './puntoDeVenta.service'
import { TestBed, async, inject } from '@angular/core/testing'


describe('Service: PuntoDeVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoDeVentaService]
    })
  })

  it('should ...', inject([PuntoDeVentaService], (service: PuntoDeVentaService) => {
    expect(service).toBeTruthy()
  }))
})
