
import { TestBed } from '@angular/core/testing';

import { emprestimoService } from './emprestimoservice';

describe('EmprestimoService', () => {
  let service: emprestimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(emprestimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});