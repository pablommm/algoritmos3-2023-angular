/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { UsuarioLoginService } from './usuarioLogin.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('Service: UsuarioLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioLoginService],
      imports: [HttpClientTestingModule]
    })
  })

  it('should ...', inject(
    [UsuarioLoginService],
    (service: UsuarioLoginService) => {
      expect(service).toBeTruthy()
    }
  ))
})
