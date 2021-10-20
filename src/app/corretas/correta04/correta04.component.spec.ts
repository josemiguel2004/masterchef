import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correta04Component } from './correta04.component';

describe('Correta04Component', () => {
  let component: Correta04Component;
  let fixture: ComponentFixture<Correta04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correta04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correta04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
