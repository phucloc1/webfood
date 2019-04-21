import { TestBed } from '@angular/core/testing';

import { DataloginService } from './datalogin.service';

describe('DataloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataloginService = TestBed.get(DataloginService);
    expect(service).toBeTruthy();
  });
});
