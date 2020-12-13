import { TestBed } from '@angular/core/testing';

import { JbwSampleLibraryService } from './jbw-sample-library.service';

describe('JbwSampleLibraryService', () => {
  let service: JbwSampleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JbwSampleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
