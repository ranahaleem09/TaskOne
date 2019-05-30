import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

import { Todos } from '../models/Todos';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MainService {

  GetTodosUrl: string =
  'https://jsonplaceholder.typicode.com/todos';
  MAX = '?_limit=8';

  GetPostsUrl: string =
  'https://jsonplaceholder.typicode.com/posts';

GetPostsIdUrl: string =
  'https://jsonplaceholder.typicode.com/posts/:id'; 

  GetUsersUrl: string =
  'https://jsonplaceholder.typicode.com/users';
  GetUsersIdUrl: string =
  'https://jsonplaceholder.typicode.com/users/:';

  GetPostofUser: string= 'https://jsonplaceholder.typicode.com/posts?userId=1';
  GetTodoofUser: string= 'https://jsonplaceholder.typicode.com/todoss?userId=1';
  constructor(private http: HttpClient) { }
  
  getTodos():Observable<Todos[]> {
    return this.http.get<Todos[]>(`${this.GetTodosUrl}${this.MAX}`);
  }
 
  toggleCompleted(todo: Todos): Observable < any > {
    const url = `${this.GetTodosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }

   deleteTodo(todo:Todos):Observable<Todos> {
    const url = `${this.GetTodosUrl}/${todo.id}`;
    return this.http.delete<Todos>(url, httpOptions);
  }

  addTodo(todo: Todos): Observable < Todos > {
    return this.http.post < Todos > (this.GetTodosUrl, todo, httpOptions);
  }

  // getPost(id) {
  //   return this.http.get(`/api/posts/${id}`);
  // }
  // getPosts() {
  //    return this.http.get(`${this.GetPostsUrl}`);
  // }
  // getPostOfUser(id) {
  //   return this.http.get(`/api/posts?userId=${id}`);
  // }

  
  // getUsers() {
    
  //       return this.http.get(`${this.GetUsersUrl}`);
  //     }
  // getUser(id) {
  //       return this.http.get(`${this.GetUsersIdUrl}`);
  //     }


  // getPost(id) {
  //   return this.http.get(`/api/posts/${id}`);
  // }
  getPosts() {
    return this.http.get(`${this.GetPostsUrl}`);
  }

  getUsers() {
    return this.http.get(`${this.GetUsersUrl}`);
  }
  getUser(id) {
    return this.http.get(`${this.GetUsersIdUrl}${id}`);
  }
  getPostOfUser(id) {
    return this.http.get(`/api/posts?userId=${id}`);
  }
  getTodoOfUser(id) {
    return this.http.get(`/api/todos?userId=${id}`);
  }
  getTodo(id) {
    return this.http.get(`/api/posts/${id}`);
  }

}
