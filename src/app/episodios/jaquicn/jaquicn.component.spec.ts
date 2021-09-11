import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaquicnComponent } from './jaquicn.component';

describe('JaquicnComponent', () => {
  let component: JaquicnComponent;
  let fixture: ComponentFixture<JaquicnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaquicnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaquicnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
