import { TestBed } from '@angular/core/testing';

import { FoodCriticsService } from './food-critics.service';

describe('FoodCriticsService', () => {
  let service: FoodCriticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCriticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
