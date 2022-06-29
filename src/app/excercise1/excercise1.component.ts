import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-excercise1',
  templateUrl: './excercise1.component.html',
  styleUrls: ['./excercise1.component.scss']
})
export class Excercise1Component {


  form: FormGroup;
  realValue: string;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      phone: [''],
    });
  }

  get displayValue() {
    return this.realValue?.length > 9 ? this.realValue : null;
  }

  set displayValue(v) {
    this.realValue = v?.replace(/[^0-9]/g, "");
  }
}
