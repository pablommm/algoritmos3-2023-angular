/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { JugadorService } from './Jugador.service'
import { HttpClientModule } from '@angular/common/http'

describe('Service: Jugador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadorService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([JugadorService], (service: JugadorService) => {
    expect(service).toBeTruthy()
  }))
})
