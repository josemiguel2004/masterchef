import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta04Component } from './pergunta04.component';

describe('Pergunta04Component', () => {
  let component: Pergunta04Component;
  let fixture: ComponentFixture<Pergunta04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pergunta04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pergunta04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
