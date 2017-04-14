/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterestsChartService } from './interests-chart.service';

describe('InterestsChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestsChartService]
    });
  });

  it('should ...', inject([InterestsChartService], (service: InterestsChartService) => {
    expect(service).toBeTruthy();
  }));
});
