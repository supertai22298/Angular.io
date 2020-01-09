import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  Output,
  EventEmitter
} from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-childrens",
  template: `
    <h1>{{ text }}</h1>
    <button (click)="onButtonClick()">Click</button>
  `,
  styleUrls: ["./childrens.component.css"]
})
export class ChildrensComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  constructor(private _dataService: DataService) {}
  @Input() text: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  onButtonClick() {
    this.text = "Tham số từ con";
    this.buttonClicked.emit(this.text);
  }
  ngOnInit() {
    this._dataService.textFromChildrens = this.text;
  }
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnChanges() {}
  ngOnDestroy() {}
}
