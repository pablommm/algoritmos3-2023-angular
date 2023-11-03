/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { DirecionService } from './direcion.service'
import { HttpClientModule } from '@angular/common/http'

describe('Service: Direcion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirecionService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([DirecionService], (service: DirecionService) => {
    expect(service).toBeTruthy()
  }))
})
