/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiguritaService } from './figurita.service';

describe('Service: FiguritaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiguritaService]
    });
  });

  it('should ...', inject([FiguritaService], (service: FiguritaService) => {
    expect(service).toBeTruthy();
  }));
});
