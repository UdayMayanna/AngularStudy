import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-study',
  standalone:false,
  templateUrl: './effect-study.component.html',
  styles: ``
})
export class EffectStudyComponent {
  count= signal(0);
  showHeadinng=false;

  constructor(){
    effect(()=>{
      if(this.count()==2){
         this.showHeadinng=true
         setTimeout(()=>{
          this.showHeadinng=false
         },2000)
      }
      else{
        this.showHeadinng=false
      }
    })
  }


  update(){
    this.count.set(this.count()+1);
  }

}
