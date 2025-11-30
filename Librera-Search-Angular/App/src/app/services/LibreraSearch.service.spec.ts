import { TestBed } from '@angular/core/testing';

import { LibreraSearchService } from './LibreraSearch.service';

describe('LibreraSearchService', () => {
  let service: LibreraSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreraSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
