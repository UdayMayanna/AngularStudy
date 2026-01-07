import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <p>
      Bind properties of TS file <span style="color: blueviolet;font-weight:bold;">{{name}}</span><br>
      We can do calculations like 85*3 = {{85*3}}<br>
      Name in uppercase <span style="color: blueviolet;font-weight:bold;">{{name.toUpperCase()}}</span><br>
      Name in lowercase <span style="color: blueviolet;font-weight:bold;">{{name.toLowerCase()}}</span><br>
      Conactination{{"My name is "+name}}
    </p>
  `,
  styles: [
  ]
})
export class InterpolationComponent {
  name="Uday";
}
