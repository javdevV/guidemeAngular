/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chart2Component } from './chart2.component';

describe('Chart2Component', () => {
  let component: Chart2Component;
  let fixture: ComponentFixture<Chart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
