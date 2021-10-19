import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta03Component } from './pergunta03.component';

describe('Pergunta03Component', () => {
  let component: Pergunta03Component;
  let fixture: ComponentFixture<Pergunta03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pergunta03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pergunta03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
