import { TestBed } from '@angular/core/testing';

import { GetborksService } from './getborks.service';

describe('GetborksService', () => {
  let service: GetborksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetborksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
