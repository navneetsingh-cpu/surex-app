import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excercise3Component } from './excercise3.component';

describe('Excercise3Component', () => {
  let component: Excercise3Component;
  let fixture: ComponentFixture<Excercise3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excercise3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excercise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
