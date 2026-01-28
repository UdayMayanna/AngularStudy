import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './comp/todo/todo.component';
import { InterpolationComponent } from './comp/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './comp/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:TodoComponent},
  {path:'interpollation', component:InterpolationComponent},
  {path:'twowaybinding', component:TwoWayBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
