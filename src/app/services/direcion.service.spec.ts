/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing'
import { DirecionService } from './direcion.service'

describe('Service: Direcion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirecionService]
    })
  })

  it('should ...', inject([DirecionService], (service: DirecionService) => {
    expect(service).toBeTruthy()
  }))
})
