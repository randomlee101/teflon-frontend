import { TestBed } from '@angular/core/testing';

import { BemaService } from './bema.service';

describe('BemaService', () => {
  let service: BemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
