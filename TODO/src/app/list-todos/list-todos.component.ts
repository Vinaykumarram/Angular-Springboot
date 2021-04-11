import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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

  message: string
  // todos = [
  //           new Todo(1, 'Learn To Dance', false, new Date()),
  //           new Todo(2, 'Become an Angular Expert', false, new Date()),
  //           new Todo(3, 'java', true, new Date()),
  //           //  {id:1,description:'Learn To Dance'},
  //           //  {id:2,description:'Become an Angular Expert'},
  //           //  {id:3,description:'java'}
  //         ]

  // {
  //     id:1,
  //     description:'Learn To Dance'
  // }
  constructor(
    private todoservice: TodoDataService,
    private router:Router
  ) {

  }

  ngOnInit() {
    this.refreshTodos();
  }


  refreshTodos() {
    this.todoservice.retrieveAllTodos('vinay').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id} `)
    this.todoservice.deleteTodo('vinay', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful`;
        this.refreshTodos();

      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
