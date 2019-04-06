import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfamousComponent } from './detailfamous.component';

describe('DetailfamousComponent', () => {
  let component: DetailfamousComponent;
  let fixture: ComponentFixture<DetailfamousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailfamousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
