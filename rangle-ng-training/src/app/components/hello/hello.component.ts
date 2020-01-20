import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  private title = '1234';
  @Output() changeTitle: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onClickTitle() {
    this.title += 1;
  }
}
