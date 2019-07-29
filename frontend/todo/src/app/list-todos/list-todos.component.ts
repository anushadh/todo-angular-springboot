import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos: Todo[]

  // todos = [
  //   new Todo(1, 'Learn to Paint', false, new Date()),
  //   new Todo(2, 'Practice Angular everyday and become an expert', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // { id: 1, description: 'Learn to Paint'},
  //   // { id: 2, description: 'Practice Angular everyday'},
  //   // { id: 3, description: 'Visit Singapore'}
  // ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to Paint'
  // }

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('anusha').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
