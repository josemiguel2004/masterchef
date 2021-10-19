import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta02Component } from './pergunta02.component';

describe('Pergunta02Component', () => {
  let component: Pergunta02Component;
  let fixture: ComponentFixture<Pergunta02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pergunta02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pergunta02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
