import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private api_url = '/api/todos';
  private headers  = new Headers({'content-type': 'application/json'});

  todos: Todo[]=[];
  constructor( private http: Http ) { }

  // POST /todos
  addTodo(todoItem:string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false,
    };
    //this.todos.push(todo);
    //return this.todos;
    return this.http.post(this.api_url, JSON.stringify(todo), { headers: this.headers })
      .toPromise()
      .then(res => { console.log(res); return res.json().data as Todo } )
      .catch(this.handleError);
  }

  // PUT /todos/:id
  toggleTodo() {
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured:', error);
    return Promise.reject(error.message || error);
  }
}
