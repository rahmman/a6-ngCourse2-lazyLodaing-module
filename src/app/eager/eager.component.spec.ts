/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EagerComponent } from './eager.component';

describe('EagerComponent', () => {
  let component: EagerComponent;
  let fixture: ComponentFixture<EagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
