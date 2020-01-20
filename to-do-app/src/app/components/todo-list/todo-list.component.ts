import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "src/app/models/todo.models";
import { TodoService } from "src/app/services/todo.service";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todo$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todo$ = this.todoService.todos$;
  }
  onChangeTodo(todo: Todo) {
    this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }
  onHandleDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }

  onHandleEditTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }
}
