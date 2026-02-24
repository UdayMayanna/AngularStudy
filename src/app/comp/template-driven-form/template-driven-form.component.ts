import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.component.html',
  styles: `p{
    color:red;
    margin:0;
  }`
})
export class TemplateDrivenFormComponent {

  user: User = {
    email: '',
    password: ''
  }
   submitForm(){
   console.log(this.user)
   }
}
