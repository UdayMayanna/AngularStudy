import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfordir',
  standalone: false,
  templateUrl: './ngfordir.component.html',
  styles: ``
})
export class NgfordirComponent {
   users=[
    {name:"Uday",age:22,Address:"Kolhapur"},
    {name:"Abhi",age:26,Address:"Pune"},
    {name:"Shubham",age:24,Address:"Sangli"}
   ]
}
