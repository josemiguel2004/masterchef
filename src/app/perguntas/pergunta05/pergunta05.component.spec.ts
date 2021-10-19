import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta05Component } from './pergunta05.component';

describe('Pergunta05Component', () => {
  let component: Pergunta05Component;
  let fixture: ComponentFixture<Pergunta05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pergunta05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pergunta05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
