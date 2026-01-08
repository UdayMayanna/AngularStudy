import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styles: [`.login-btn{
    padding:10px 20px;
    background:green;
    color:#fff;
    border:none;
    border-radius:10px;
    font-size:18px;
  }
  
  .mouse-enter{
    height:80px;
    width:80px;
    background:green;
    margin-top:20px;
  }
  
  .cst-input{
    padding:10px;
    border:none;
    border-bottom:2px solid black;
    border-radius:5px;
  }`
    ],
    standalone: false
})
export class EventsComponent {
handleClick(event:MouseEvent){
  const targetEle = event.target as HTMLButtonElement;
  console.log("Button event is : ",event.type);
  console.log("Button name is : ",targetEle.name);
  console.log("Button classes are : ",targetEle.classList)
  console.log("Button classes are in another way : ",targetEle.className)
}

mouseEvents(event:MouseEvent){
  const element = event.currentTarget  as HTMLDivElement;
  console.log("Enevnt Called : ",event.type)
  if(event.type == 'mouseenter'){
     element.style.background = "red";
     element.style.transition = "all 0.3s ease-in-out"
  }
  if(event.type == 'mouseleave'){
     element.style.background = "green";
     element.style.transition = "all 0.3s ease-in-out"
  }
}

inputEvents(event:Event){
  const element = event.currentTarget as HTMLInputElement;
  if(event.type == "input"){
    element.style.borderBottom = "2px solid blue";
    element.style.outline = "none"
  }
  if(event.type == "focus"){
    element.style.borderBottom = "2px solid green";
    element.style.outline = "none"
  }
  if(event.type == "blur"){
    element.style.borderBottom = "2px solid red";
    element.style.outline = "none"
  }
}
}
