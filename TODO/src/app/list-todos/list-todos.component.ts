import { Component, OnInit } from '@angular/core';

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

  todos = [
            new Todo(1, 'Learn To Dance', false, new Date()),
            new Todo(2, 'Become an Angular Expert', false, new Date()),
            new Todo(3, 'java', true, new Date()),
            //  {id:1,description:'Learn To Dance'},
            //  {id:2,description:'Become an Angular Expert'},
            //  {id:3,description:'java'}
          ]

            // {
            //     id:1,
            //     description:'Learn To Dance'
            // }
  constructor() { }

  ngOnInit() { }

}
