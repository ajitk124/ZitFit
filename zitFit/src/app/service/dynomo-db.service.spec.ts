import { TestBed, inject } from '@angular/core/testing';

import { DynomoDbService } from './dynomo-db.service';

describe('DynomoDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynomoDbService]
    });
  });

  it('should be created', inject([DynomoDbService], (service: DynomoDbService) => {
    expect(service).toBeTruthy();
  }));
});
