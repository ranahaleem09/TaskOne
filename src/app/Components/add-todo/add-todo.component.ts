import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() putTodo: EventEmitter<any>= new EventEmitter();
  
  title: string

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const Newtodo={
      title: this.title,
      component: false
    }
    this.putTodo.emit(Newtodo)
  }


}
