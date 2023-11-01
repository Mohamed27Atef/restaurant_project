import { TestBed } from '@angular/core/testing';

import { CreateorderService } from './createorder.service';

describe('CreateorderService', () => {
  let service: CreateorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
