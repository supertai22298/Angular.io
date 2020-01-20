import { Component, OnInit } from "@angular/core";
import { Observable, observable } from "rxjs";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.scss"]
})
export class ObservableComponent implements OnInit {
  status = "Started";
  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  subscribed = false;

  constructor() {}

  init() {
    this.data = new Observable(observable => {
      setTimeout(() => {
        observable.next(42);
      }, 1000);
      setTimeout(() => {
        observable.next(43);
      }, 2000);
      setTimeout(() => {
        observable.next(44);
      }, 3000);
      setTimeout(() => {
        observable.complete();
      }, 4000);
    });

    let subscription = this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = true,
      () => this.finished = true
    );
    // let subscription = this.data
    //   .forEach(v => this.values.push(v))
    //   .then(() => {
    //     this.finished = true;
    //     this.status = "Ended";
    //   })
    //   .catch(() => (this.anyErrors = true));
    this.subscribed = true;

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 1000);
    setTimeout(() => {
      this.data.subscribe(value => console.log(value));
    }, 0);

    // Subscription B
    setTimeout(() => {
      this.data.subscribe(value => console.log(`>>>> ${value}`));
    }, 0);
  }

  ngOnInit() {}
}
