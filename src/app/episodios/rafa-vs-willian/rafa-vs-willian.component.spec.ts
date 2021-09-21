import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafaVsWillianComponent } from './rafa-vs-willian.component';

describe('RafaVsWillianComponent', () => {
  let component: RafaVsWillianComponent;
  let fixture: ComponentFixture<RafaVsWillianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RafaVsWillianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RafaVsWillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
