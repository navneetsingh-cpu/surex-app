import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneMaskDirective } from './phone-mask.directive';
import { Excercise1Component } from './excercise1/excercise1.component';
import { Excercise3Component } from './excercise3/excercise3.component';
import { Excercise3SubComponentComponent } from './excercise3/excercise3-sub-component/excercise3-sub-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    Excercise1Component,
    Excercise3Component,
    Excercise3SubComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
