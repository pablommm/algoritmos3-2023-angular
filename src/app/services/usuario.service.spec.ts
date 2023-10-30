/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { UsuarioService } from './usuario.service'
import { HttpClientModule } from '@angular/common/http'

describe('Service: Usuario.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy()
  }))
})
