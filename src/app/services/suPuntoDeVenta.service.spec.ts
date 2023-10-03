/* tslint:disable:no-unused-variable */
import { SuPuntoDeVentaService } from './suPuntoDeVenta.service';
import { TestBed, async, inject } from '@angular/core/testing'


describe('Service: SuPuntoDeVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuPuntoDeVentaService]
    })
  })

  it('should ...', inject([SuPuntoDeVentaService], (service: SuPuntoDeVentaService) => {
    expect(service).toBeTruthy()
  }))
})
