import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent{
  counter = 10;

  changeValue(value: number ){
    this.counter += value;
  }
  resetValue(){
    this.counter = 10;
  }
}