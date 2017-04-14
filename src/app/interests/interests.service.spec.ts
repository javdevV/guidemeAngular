/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestsService]
    });
  });

  it('should ...', inject([InterestsService], (service: InterestsService) => {
    expect(service).toBeTruthy();
  }));
});
