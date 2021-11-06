import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todoTask';
  newTodo:string;
  todos:Array<string>
  constructor(){
    this.newTodo='';
    this.todos=[]
  }
  ngOnInit(){
    this.fetchTodosLocalStorage()
  }
  

  addTodo(){
    this.todos.push(this.newTodo);
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
  removeTodo(i){
    this.todos.splice(i,1)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
  fetchTodosLocalStorage(){
    let storedTodos=localStorage.getItem('todos')
    if(!!storedTodos)
    this.todos=[...JSON.parse(storedTodos)]
  }
}
