import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.component.html',
  styles: ``
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
