import { TestBed } from '@angular/core/testing';

import { SimpleFormBuilderService } from './simple-form-builder.service';

describe('SimpleFormBuilderService', () => {
  let service: SimpleFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
