import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-komponen1',
  templateUrl: './komponen1.component.html',
  styleUrls: ['./komponen1.component.css'],
})
export class Komponen1Component implements OnInit {
  @Input() message = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addNewItem(value:string) {
    this.newItemEvent.emit(value);
  }

  increaseCounter() {

  }

  decreaseCounter() {
    
  }
  
}
