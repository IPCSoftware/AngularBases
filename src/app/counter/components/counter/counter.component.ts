import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p> {{contador}} </p>
  <button (click)="aumentaValor(+1)">+1</button>
  <button (click)="aumentaValor(-1)" >-1</button>
  <button (click)="resetValor()">reset</button>

  `,
})


export class CounterComponent {
  title = 'bases';
  public contador: number = 10;

  aumentaValor(value: number):void {
    this.contador += value;
  }
  resetValor():void {
    this.contador = 10;
  }

}
