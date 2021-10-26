import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCriticsComponent } from './food-critics.component';

describe('FoodCriticsComponent', () => {
  let component: FoodCriticsComponent;
  let fixture: ComponentFixture<FoodCriticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCriticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCriticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
