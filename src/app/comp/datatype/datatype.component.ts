import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styles: [
  ]
})
export class DatatypeComponent {
  name:string="Uday";  //Property //Will store string only
  data:string | number ="65"// Will store number as well as string
  other:boolean=true; // Will store boolean value
  canStoreAny:any; // Will store any data type value

  updateData(){
    let x:string | number="Uday Anil Mayanna" //variable
    console.log(x)
    x=12;
    console.log
  }

  sum(x:number,y:number){
    let sum;
    sum=x+y;
    this.data = sum;
    console.log(this.data)
  }
}
