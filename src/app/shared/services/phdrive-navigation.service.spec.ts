import { TestBed } from '@angular/core/testing';

import { PhdriveNavigationService } from './phdrive-navigation.service';

describe('PhdriveNavigationService', () => {
  let service: PhdriveNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhdriveNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
