import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatmonComponent } from './datmon.component';

describe('DatmonComponent', () => {
  let component: DatmonComponent;
  let fixture: ComponentFixture<DatmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
