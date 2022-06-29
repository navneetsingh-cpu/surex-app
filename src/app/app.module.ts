import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneMaskDirective } from './phone-mask.directive';
import { Excercise1Component } from './excercise1/excercise1.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    Excercise1Component,
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
