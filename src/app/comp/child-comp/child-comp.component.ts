import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: false,
  templateUrl: './child-comp.component.html',
  styles: ``
})
export class ChildCompComponent {
  @Input () user:string="";
}
