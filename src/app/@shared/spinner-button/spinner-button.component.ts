import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit {
  @Input() color;
  @Input() isProcessing;
  @Input() disabled;
  @Input() customClasses = '';

  @Output() action = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public click() {
    if (!this.isProcessing) {
      this.action.next();
    }
  }
}
