import { Component } from '@angular/core';

@Component({
  selector: 'app-fun-call',
  templateUrl: './fun-call.component.html',
  styles: [
  ]
})
export class FunCallComponent {
   name="";
   setName="Uday"
   showName(){
   this.name = this.setName
   }
}
