import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: 'Learn to Paint'},
    { id: 2, description: 'Practice Angular everyday'},
    { id: 3, description: 'Visit Singapore'}
  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to Paint'
  // }

  constructor() { }

  ngOnInit() {
  }

}
