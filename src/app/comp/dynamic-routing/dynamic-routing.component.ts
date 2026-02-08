import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-routing',
  standalone: false,
  templateUrl: './dynamic-routing.component.html',
  styles: ``
})
export class DynamicRoutingComponent {
  users = [
    { 
      id:1,
      name: "Uday Mayanna",
      address: "Kolhapur",
      phone: "674443229",
      age: 12
    },
    { 
      id:2,
      name: "Sandesh Pawar",
      address: "Sangli",
      phone: "673343229",
      age: 17
    },
    { 
      id:3,
      name: "Shubham Bhadarge",
      address: "Gadhinglaj",
      phone: "633443229",
      age: 18
    },
    { 
      id:4,
      name: "Omkar Kumbhar",
      address: "Nippani",
      phone: "674443119",
      age: 16
    }
  ]
}
