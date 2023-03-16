import { TestBed } from '@angular/core/testing';

import { CommonSeviceService } from './common-sevice.service';

describe('CommonSeviceService', () => {
  let service: CommonSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
