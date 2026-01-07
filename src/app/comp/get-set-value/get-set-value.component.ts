import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-value',
  templateUrl: './get-set-value.component.html',
  styles: [`input{
    padding:10px 20px;
    margin-right:10px;
    font-size:18px;
    border-radius:10px;
    border:none;
    background:#cfcfcf;
  }
  button{
    padding:10px 20px;
    margin-right:10px;
    font-size:18px;
    border-radius:10px;
    border:none;
    color:#fff;
  }
  .show{
    background:green;
  }
  .set{
    background:blueviolet;
  }`
  ]
})
export class GetSetValueComponent {

username="";
getUserName="";
email="";
getEmail="";
getUsername(event:Event){
  this.username = (event.target as HTMLInputElement).value
}
showUsername(){
  this.getUserName = this.username;
}
setUsername(){
  this.username = "messi";
}
showEmail(){
  this.getEmail = this.email;
}
getEmails(email:string){
    this.email = email;
}
setDefaultEmail(){
  this.email = "defut@gmail.com"
}
}
