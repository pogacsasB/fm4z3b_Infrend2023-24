import { TestBed } from '@angular/core/testing';

import { PatientHistoryService } from './patienthistory.service';

describe('PatienthistoryService', () => {
  let service: PatientHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
