import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surex-app';
  phoneNum: string;

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
