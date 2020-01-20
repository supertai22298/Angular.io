import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-observable></app-observable>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users/').subscribe(resp => {
      this.users = [...Object.values(resp)];
      console.log(this.users);
    });
  }
  test() {

  }
}
