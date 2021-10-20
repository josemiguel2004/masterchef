import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correta01Component } from './correta01.component';

describe('Correta01Component', () => {
  let component: Correta01Component;
  let fixture: ComponentFixture<Correta01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correta01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correta01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
