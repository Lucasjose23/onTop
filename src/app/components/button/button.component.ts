import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() type: 'filter' | 'primary' = 'primary';
  @Input() text: string = 'New hire';
  @Output() clicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  event(event: any) {
    this.clicked.emit(event);
  }
}
