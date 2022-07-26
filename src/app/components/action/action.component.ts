import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.sass'],
  animations: [
    trigger("actionMenu", [
      transition(":enter", [
        style({  opacity: '0' }),
        animate("251ms", style({opacity: '1'})),
      ]),

      transition(":leave", [
        animate("251ms", style({ opacity: '0'  })),
      ]),
    ]),
   
  ],
})
export class ActionComponent implements OnInit {
  @Input() active:boolean=false;
  @Input() inverted:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  clickActive(){
    this.active=this.active? false: true;
  }
}
