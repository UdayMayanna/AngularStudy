import { Component } from '@angular/core';

@Component({
    selector: 'app-counter-app',
    templateUrl: './counter-app.component.html',
    styleUrls: ['./counter-app.component.css'],
    standalone: false
})
export class CounterAppComponent {
   counter:number=0;

   handlecounter(operation:string){
      if(operation == "plus"){
        this.counter++;
      }
      else if(operation == "minus"){
         if(this.counter == 0){
          this.counter = 0;
         }
         else{
          this.counter --;
         }
      }
      else{
        this.counter = 0;
      }
   }
}
