import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatmonnoibatComponent } from './datmonnoibat.component';

describe('DatmonnoibatComponent', () => {
  let component: DatmonnoibatComponent;
  let fixture: ComponentFixture<DatmonnoibatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatmonnoibatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatmonnoibatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
