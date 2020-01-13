import { Component, OnInit } from "@angular/core";
import { TodoService } from "./services/todo.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "to-do-app";
  hasTodo$: Observable<boolean>;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
  }
}
