/* tslint:disable:no-unused-variable */
import { PuntoDeVentaService } from './puntoDeVenta.service'
import { TestBed, async, inject } from '@angular/core/testing'


describe('Service: SupermercadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupermercadoService]
    })
  })

  it('should ...', inject([SupermercadoService], (service: SupermercadoService) => {
    expect(service).toBeTruthy()
  }))
})
