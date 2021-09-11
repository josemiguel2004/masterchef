import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeDeFavaComponent } from './pe-de-fava.component';

describe('PeDeFavaComponent', () => {
  let component: PeDeFavaComponent;
  let fixture: ComponentFixture<PeDeFavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeDeFavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeDeFavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
