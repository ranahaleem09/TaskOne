import { Component, OnInit } from '@angular/core';
import {Todos} from '../../models/Todos';
import { MainService } from 'src/app/Services/main.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todos[];
  constructor(private todoService:MainService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
 
  RemoveTodo(todo: Todos) {
  
    this.todos = this.todos.filter(t => t.id !== todo.id);
   
    this.todoService.deleteTodo(todo).subscribe();
  }
  
  addTodo(todo:Todos) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log(todo);
    });
  }
}
