import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Todos} from '../../models/Todos';
import { MainService } from 'src/app/Services/main.service';
@Component({
  selector: 'app-a-todo',
  templateUrl: './a-todo.component.html',
  styleUrls: ['./a-todo.component.css']
})
export class ATodoComponent implements OnInit {
@Input() todo:Todos;
@Output() TodoRemove: EventEmitter<Todos> = new EventEmitter();


  constructor(private todoService:MainService) { }

  ngOnInit() {
  }
  UpdateTodos() {
    let items = {
      todo: true,
      'complete': this.todo.completed
    }

    return items;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
     this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
     this.TodoRemove.emit(todo);
  }

}
