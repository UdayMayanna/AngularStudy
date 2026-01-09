import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-comp',
  standalone:false,
  templateUrl: './switch-comp.component.html',
  styles: ``,
})
export class SwitchCompComponent {
 color="red";

 updateColor(val:string){
   this.color=val;
 }
 updateColorInput(event:Event){
  this.color = (event.target as HTMLInputElement).value
 }
}
