import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  standalone: false,
  templateUrl: './for-loop.component.html',
  styles: ``
})
export class ForLoopComponent {
   students=[
    {stuName:"Uday",stuId:2323,stuAge:34},
    {stuName:"Abhi",stuId:7544,stuAge:31},
    {stuName:"Shubham",stuId:7588,stuAge:33},
    {stuName:"Ankit",stuId:7623,stuAge:23}
   ]
}
