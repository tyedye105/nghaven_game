/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GatherComponent } from './gather.component';

describe('GatherComponent', () => {
  let component: GatherComponent;
  let fixture: ComponentFixture<GatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
