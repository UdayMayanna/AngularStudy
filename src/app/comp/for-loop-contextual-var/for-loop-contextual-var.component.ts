import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop-contextual-var',
  standalone:false,
  templateUrl: './for-loop-contextual-var.component.html',
  styles: ``
})
export class ForLoopContextualVarComponent {
    students=[
    {stuName:"Uday",stuId:2323,stuAge:34},
    {stuName:"Abhi",stuId:7544,stuAge:31},
    {stuName:"Shubham",stuId:7588,stuAge:33},
    {stuName:"Ankit",stuId:7623,stuAge:23}
   ]

  //Tere $count also available for as contextual varaible
   users=[]; 
}
