import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-simple-signal',
  standalone:false,
  templateUrl: './simple-signal.component.html',
  styles: ``
})
export class SimpleSignalComponent {
   signalVal:WritableSignal<number> = signal<number>(20);
   signalVal2 = signal<string | number>("Hello");
   computedSignal = computed(()=>{
        300
   });
   constructor(){
    effect(()=>{
      console.log(this.signalVal())
    })
   }

   decreaseVal(){
   if(this.signalVal() == 0){
    this.signalVal.set(0);
   }
   else{
     this.signalVal.set(this.signalVal()-1);
   }
   }

   updateVal(){
    if(this.signalVal2() == "Hello"){
        this.signalVal2.set(12);
    }
    else{
      this.signalVal2.set("Hello");
    }
    
   }
}
