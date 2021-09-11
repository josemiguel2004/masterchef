import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosDesastrososComponent } from './pratos-desastrosos.component';

describe('PratosDesastrososComponent', () => {
  let component: PratosDesastrososComponent;
  let fixture: ComponentFixture<PratosDesastrososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosDesastrososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosDesastrososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
