import { TestBed } from '@angular/core/testing';

import { LanchesService } from './lanches.service';

describe('LanchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanchesService = TestBed.get(LanchesService);
    expect(service).toBeTruthy();
  });
});
