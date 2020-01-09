import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1 [class.with-border]="withBorder" [style.color]="textColor">
      {{ title }}
    </h1>
    <button [class.with-border]="withBorder" (click)="onButtonClick($event)">
      Change Text
    </button>
    <app-childrens
      [text]="title"
      (buttonClicked)="onButtonFromChildClick($event)"
    ></app-childrens>
    <app-neighbors></app-neighbors>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  title = "Hello World";
  withBorder = true;
  textColor = "#FF0054";
  onButtonFromChildClick(event: string) {
    this.title = event;
    console.log(event);
  }
  ngOnInit() {}
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnChanges() {}
  ngOnDestroy() {}
  onButtonClick() {
    this.textColor = `#${Math.floor(Math.random() * 1e6)}`;
    this.title = "Tham số từ cha";
  }
}
