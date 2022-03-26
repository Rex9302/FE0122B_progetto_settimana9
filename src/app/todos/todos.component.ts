import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  task!:Todo[];
  newTask!:string;


  constructor() {
    TodoService.get().then((todos) => (this.task = todos.filter(todo => !todo.completed)));
  }

  ngOnInit(): void {
  }

  async aggiungi(){
    if(this.newTask != undefined){
      console.log(this.newTask)
    const nTodo =  await TodoService.aggiungi(
      {title:this.newTask as string,completed:false})
    this.task.push(nTodo);
    this.newTask = ''
    }else{
      alert('Inserisci una task!')
    }
   }
   async completeTask(todo:Todo,i:number){
     await TodoService.update({completed:true},todo.id)
     this.task.splice(i,1)
   }
  }



