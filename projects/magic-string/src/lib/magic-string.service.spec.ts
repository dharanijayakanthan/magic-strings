import { TestBed } from '@angular/core/testing';

import { MagicStringService } from './magic-string.service';

describe('MagicStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicStringService = TestBed.get(MagicStringService);
    expect(service).toBeTruthy();
  });
});
