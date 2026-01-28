import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './comp/todo/todo.component';
import { InterpolationComponent } from './comp/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './comp/two-way-binding/two-way-binding.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:TodoComponent},
  {path:'interpollation', component:InterpolationComponent},
  {path:'twowaybinding', component:TwoWayBindingComponent},
  {path:'**',component:PageNotFoundComponent}
  //Also called as wild card route
  // Always last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
