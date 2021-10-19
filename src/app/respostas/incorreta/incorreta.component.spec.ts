import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorretaComponent } from './incorreta.component';

describe('IncorretaComponent', () => {
  let component: IncorretaComponent;
  let fixture: ComponentFixture<IncorretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorretaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
