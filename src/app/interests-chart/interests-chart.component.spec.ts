/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterestsChartComponent } from './interests-chart.component';

describe('InterestsChartComponent', () => {
  let component: InterestsChartComponent;
  let fixture: ComponentFixture<InterestsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
