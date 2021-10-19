import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretaComponent } from './correta.component';

describe('CorretaComponent', () => {
  let component: CorretaComponent;
  let fixture: ComponentFixture<CorretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
