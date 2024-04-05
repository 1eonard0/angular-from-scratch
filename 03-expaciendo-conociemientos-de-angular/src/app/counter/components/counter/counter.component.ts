import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{
  private counterValue: number = 10;
  public counter: number = this.counterValue;

  increaseBy(value:number): void {
    this.counter += value;
  }

  reset():void {
    this.counter = this.counterValue;
  }
}
