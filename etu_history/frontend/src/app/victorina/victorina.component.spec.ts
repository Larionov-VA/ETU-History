/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VictorinaComponent } from './victorina.component';

describe('VictorinaComponent', () => {
  let component: VictorinaComponent;
  let fixture: ComponentFixture<VictorinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictorinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
