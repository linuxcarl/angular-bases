import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 6px 10px;
      width: 65px;
      margin: 0 10px;
      border: 1px solid #eee;
      border-radius: 5px;
      cursor: pointer;
    }`,
})
export class CounterPageComponent{
  counter = 10;
  counterSignal = signal<number>(10);

  changeValue(value: number ){
    this.counter += value;
    this.counterSignal.update( counter => counter + value)
  }
  resetValue(){
    this.counter = 0;
    this.counterSignal.set(0)
  }
}