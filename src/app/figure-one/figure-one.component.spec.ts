import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureOneComponent } from './figure-one.component';

describe('FigureOneComponent', () => {
  let component: FigureOneComponent;
  let fixture: ComponentFixture<FigureOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigureOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
