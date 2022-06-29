import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-excercise3-sub-component',
  templateUrl: './excercise3-sub-component.component.html',
  styleUrls: ['./excercise3-sub-component.component.scss']
})
export class Excercise3SubComponentComponent implements OnInit, OnChanges {

  @Input() inputData;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    const change = changes['inputData'];
    const newValue = change.currentValue;
    const oldValue = change.previousValue;

    if (newValue !== oldValue) {
      console.log(`Value has changed to: ${newValue}`);
    }
  }

}
