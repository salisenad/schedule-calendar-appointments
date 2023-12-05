import { TestBed } from '@angular/core/testing';

import { ScheduleDateService } from './schedule-date.service';

describe('ScheduleDateService', () => {
  let service: ScheduleDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
