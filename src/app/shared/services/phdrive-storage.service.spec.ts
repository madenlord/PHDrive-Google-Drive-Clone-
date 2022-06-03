import { TestBed } from '@angular/core/testing';

import { PhdriveStorageService } from './phdrive-storage.service';

describe('PhdriveStorageService', () => {
  let service: PhdriveStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhdriveStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
