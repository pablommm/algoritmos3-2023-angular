/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { SeleccionService } from './Seleccion.service'
import { HttpClientModule } from '@angular/common/http'

describe('Service: Seleccion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeleccionService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([SeleccionService], (service: SeleccionService) => {
    expect(service).toBeTruthy()
  }))
})
