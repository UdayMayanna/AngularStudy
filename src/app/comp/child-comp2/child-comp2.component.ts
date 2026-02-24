import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp2',
  standalone: false,
  templateUrl: './child-comp2.component.html',
  styles: ``
})
export class ChildComp2Component {
  name="uday";

  @Output() getUser=new EventEmitter();

  sendData(){
    this.getUser.emit(this.name);
  }
}
