import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  constructor(private route:ActivatedRoute){}
    name:string|null="";

  ngOnInit(){
    //  this.name = this.route.snapshot.paramMap.get('name');

    // this.route.queryParams.subscribe(parms=>{
    //    this.name = parms['name'];
    // })

    //There is another way to send data using route

    this.route.data.subscribe(parms=>{
      this.name = parms['name'];
    })
  }
}
