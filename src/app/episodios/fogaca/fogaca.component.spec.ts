import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogacaComponent } from './fogaca.component';

describe('FogacaComponent', () => {
  let component: FogacaComponent;
  let fixture: ComponentFixture<FogacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FogacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
