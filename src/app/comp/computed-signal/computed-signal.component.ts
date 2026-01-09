import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone:false,
  templateUrl: './computed-signal.component.html',
  styles: ``
})
export class ComputedSignalComponent {
    x=signal(20);
    y=signal(40);
    z=computed(()=>this.x()+this.y())
    updateValue(){
      this.x.set(34);
    }
}
