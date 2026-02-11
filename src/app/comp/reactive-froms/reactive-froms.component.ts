import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-froms',
  standalone: false,
  templateUrl: './reactive-froms.component.html',
  styles: ``
})
export class ReactiveFromsComponent {
   email = new FormControl("",[Validators.required]);
   pass = new FormControl("",[Validators.required,Validators.minLength(6)]);
   
}

