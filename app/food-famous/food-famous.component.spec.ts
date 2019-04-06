import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFamousComponent } from './food-famous.component';

describe('FoodFamousComponent', () => {
  let component: FoodFamousComponent;
  let fixture: ComponentFixture<FoodFamousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFamousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
