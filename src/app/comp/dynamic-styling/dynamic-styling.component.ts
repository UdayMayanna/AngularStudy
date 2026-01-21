import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  standalone:false,
  templateUrl: './dynamic-styling.component.html',
  styles: ``
})
export class DynamicStylingComponent {
  headingSmall="30px";
  headingBig="50px";

  zoom=false;

  toggleFontSize(){
    this.zoom = !this.zoom;
  }
}
