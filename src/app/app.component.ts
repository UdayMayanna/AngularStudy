import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'my-app 12';

  //code For Child Comp2 (To import data from Child to parent)

  handleUser(user:string){
    this.title=user;
  }
}
