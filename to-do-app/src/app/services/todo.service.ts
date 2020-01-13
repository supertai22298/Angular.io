import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.models";
import { BehaviorSubject, Observable } from "rxjs";
import { Filter } from "../models/filtering.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root"
})
export class TodoService {

  private static readonly TodoStorageKey = "todos";

  private todos: Todo[]; // Biến ni chỉ sử dụng trong lớp Service
  private filteredTodos: Todo[]; // Tương tự cái ni

  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private displayTodosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  private currentFilter: Filter = Filter.All;

  todos$: Observable<Todo[]> = this.displayTodosSubject.asObservable();
  length$: Observable<number> = this.lengthSubject.asObservable();

  constructor(private storageService: LocalStorageService) {}
  private updateTodosData() {
    this.displayTodosSubject.next(this.filteredTodos);
    this.lengthSubject.next(this.todos.length);
  }
  fetchFromLocalStorage() {
    this.todos =
      this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
    this.filteredTodos = [...this.todos.map(todo => ({ ...todo }))];
    this.updateTodosData();
  }

  updateToLocalStorage() {
    this.storageService.setObject(TodoService.TodoStorageKey, this.todos);
    this.filterTodos(this.currentFilter, false);
    this.updateTodosData();
  }
  filterTodos(filter: Filter, isFiltering: boolean = true) {
    this.currentFilter = filter;
    switch (filter) {
      case Filter.Active:
        this.filteredTodos = this.todos.filter(todo => !todo.isCompleted);
        break;
      case Filter.Completed:
        this.filteredTodos = this.todos.filter(todo => todo.isCompleted);
        break;
      default:
        this.filteredTodos = [...this.todos.map(todo => ({ ...todo }))];
        break;
    }
    if (isFiltering) {
      this.updateTodosData();
    }
  }
  addTodo(todoContent: string) {
    const date = new Date(Date.now()).getTime();
    const newTodo = new Todo(date, todoContent);
    this.todos.unshift(newTodo);
    this.updateToLocalStorage();
  }
  changeTodoStatus(id: number, isCompleted: boolean) {
    const index = this.todos.findIndex(t => t.id === id);
    const todo = this.todos[index];
    todo.isCompleted = isCompleted;
    this.todos.splice(index, 1, todo);
    this.updateToLocalStorage();
  }
  deleteTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    this.updateToLocalStorage();
  }
  updateTodo(editedTodo: Todo) {
    const index = this.todos.findIndex(t => t.id === editedTodo.id);
    this.todos.splice(index, 1, editedTodo);
    this.updateToLocalStorage();
  }

  handleCompletedAllTodo() {
    this.todos = this.todos.map(todo => {
      return {
        ...todo,
        isCompleted: !this.todos.every(t => t.isCompleted)
      };
    });
    this.updateToLocalStorage();
  }
  clearCompletedTodo() {
    this.todos = this.todos.filter(todo => !todo.isCompleted);
    this.updateToLocalStorage();
  }

}
