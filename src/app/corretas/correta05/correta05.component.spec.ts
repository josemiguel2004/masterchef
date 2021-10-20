import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correta05Component } from './correta05.component';

describe('Correta05Component', () => {
  let component: Correta05Component;
  let fixture: ComponentFixture<Correta05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correta05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correta05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
