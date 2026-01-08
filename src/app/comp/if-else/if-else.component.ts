import { Component } from '@angular/core';

@Component({
    selector: 'app-if-else',
    templateUrl: './if-else.component.html',
    styles: [],
    standalone: false
})
export class IfElseComponent {
  display = false;
  toggleColor(){
    this.display = !this.display;
  }
}
