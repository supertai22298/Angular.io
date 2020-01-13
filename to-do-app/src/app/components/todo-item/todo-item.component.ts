import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/todo.models";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
  animations: [
    trigger("fadeStrikeThrough", [
      state(
        "active",
        style({
          fontSize: "18px",
          color: "black"
        })
      ),
      state(
        "completed",
        style({
          fontSize: "17px",
          color: "lightgrey",
          textDecoration: "line-through"
        })
      ),
      transition("active <=> completed", [animate(250)])
    ])
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() handleTodoStatusChange: EventEmitter<Todo> = new EventEmitter<
    Todo
  >();
  @Output() handleDeteleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() handleSubmitEditTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  isHoverred = false;
  isEditing = false;
  constructor() {}

  ngOnInit() {}
  changeTodoStatus() {
    this.handleTodoStatusChange.emit({
      ...this.item,
      isCompleted: !this.item.isCompleted
    });
  }
  onDeleteTodo() {
    this.handleDeteleTodo.emit({
      ...this.item
    });
  }
  submitEditTodo(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    const { keyCode } = event;
    event.preventDefault();

    if (keyCode === 13) {
      if (this.item.content === "") {
        return alert("Enter something!");
      }
      this.handleSubmitEditTodo.emit({
        ...this.item
      });
      this.isEditing = !this.isEditing;
    }
  }
}
