import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excercise3SubComponentComponent } from './excercise3-sub-component.component';

describe('Excercise3SubComponentComponent', () => {
  let component: Excercise3SubComponentComponent;
  let fixture: ComponentFixture<Excercise3SubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excercise3SubComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excercise3SubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
