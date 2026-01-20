import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone:false,
  templateUrl: './todo.component.html',
  styles: ``
})
export class TodoComponent {
  task="";
  id=1;
  tasks:{todo:string,id:number,date:Date}[]=[];
  addTask(){
    const currentDate = new Date();
    this.tasks.push({todo:this.task,id:this.id,date:currentDate})
    this.task=""
    this.id++;
  }
  deleteTask(id:number){
      this.tasks = this.tasks.filter((current)=>current.id!=id)
  }
}
