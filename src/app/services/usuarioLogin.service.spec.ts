/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioLoginService } from './usuarioLogin.service';

describe('Service: UsuarioLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioLoginService]
    });
  });

  it('should ...', inject([UsuarioLoginService], (service: UsuarioLoginService) => {
    expect(service).toBeTruthy();
  }));
});
