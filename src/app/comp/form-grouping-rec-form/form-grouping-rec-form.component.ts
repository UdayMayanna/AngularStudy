import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-grouping-rec-form',
  standalone: false,
  templateUrl: './form-grouping-rec-form.component.html',
  styles: ``
})
export class FormGroupingRecFormComponent {
  profileform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.minLength(5)]),
    pass: new FormControl('',[Validators.required,Validators.maxLength(15)])
  })

  get name(){
    return this.profileform.get('name');
  }

  get email(){
    return this.profileform.get('email');
  }

  get pass(){
    return this.profileform.get('pass');
  }
}
