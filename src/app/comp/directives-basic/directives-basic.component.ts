import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-basic',
  standalone: false,
  templateUrl: './directives-basic.component.html',
  styles: ``
})
export class DirectivesBasicComponent {
  show=true;

  toggleHeading(){
    this.show = !this.show;
  }
}
