import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-user',
  imports: [RouterLink],
  templateUrl: './single-user.component.html',
  styles: ``
})
export class SingleUserComponent {
  
  constructor(private router:ActivatedRoute){}

  id="";
  age=0;
  name="";

  ngOnInit(){
    this.router.params.subscribe(params=>{
      this.id = params['id'];
      this.name = params['name'];
    })
  }
}
