import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correta02Component } from './correta02.component';

describe('Correta02Component', () => {
  let component: Correta02Component;
  let fixture: ComponentFixture<Correta02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correta02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correta02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
