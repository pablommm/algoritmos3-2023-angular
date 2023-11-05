/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { SeleccionService } from './Seleccion.service'

describe('Service: Seleccion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeleccionService]
    })
  })

  it('should ...', inject([SeleccionService], (service: SeleccionService) => {
    expect(service).toBeTruthy()
  }))
})
