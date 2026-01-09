import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  templateUrl: './else-if.component.html',
  styles: ``,
  standalone:false
})
export class ElseIfComponent {
    color=1;

    updateColor(val:number){
      this.color=val;
    }
    updateColorInput(event:Event){
      this.color= parseInt((event.target as HTMLInputElement).value);
    }
}
