import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() operation: string = "";
  @Output() counterEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  execute() {
    this.counterEvent.emit();
  }
}
