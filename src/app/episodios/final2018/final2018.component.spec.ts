import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Final2018Component } from './final2018.component';

describe('Final2018Component', () => {
  let component: Final2018Component;
  let fixture: ComponentFixture<Final2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Final2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Final2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
