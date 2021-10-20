import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correta03Component } from './correta03.component';

describe('Correta03Component', () => {
  let component: Correta03Component;
  let fixture: ComponentFixture<Correta03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correta03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correta03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
