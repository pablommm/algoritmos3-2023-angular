/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { UsuarioService } from './usuario.service'

describe('Service: Usuario.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService]
    })
  })

  it('should ...', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy()
  }))
})
