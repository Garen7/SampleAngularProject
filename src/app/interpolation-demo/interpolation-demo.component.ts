import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  template: `<input #box
            (keyup)="value = box.value; emmiter.emit(box.value)">
            <p>{{value}}</p>
            
            <p>{{test}}</p>
            
            <input type="text" [(ngModel)]="name"> <br/>
            <div [style.background-color]="name">Hello , {{ name }}</div>`,
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {

  @Input() test?:number;
  value = '';
  name = '';

  @Output() emmiter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
