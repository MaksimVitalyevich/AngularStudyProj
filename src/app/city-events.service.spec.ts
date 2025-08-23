import { TestBed } from '@angular/core/testing';

import { CityEventsService } from './city-events.service';

describe('CityEventsService', () => {
  let service: CityEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
