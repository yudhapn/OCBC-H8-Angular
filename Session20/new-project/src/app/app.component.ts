import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentMessage = 'Hello this is from Parent!';
  title = 'new-project';
  resetStr = 'reset';
  increaseSymbol = '+';
  decreaseSymbol = '-';
  counter = 0;
  items = ['sepatu', 'sendal', 'tas'];

  addItemInParent(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
