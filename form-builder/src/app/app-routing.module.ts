import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './dynamic-form-builder/team/team.component';
import { ParentFormComponent } from './form-group-handler/components/parent-form/parent-form.component';


const routes: Routes = [
  {
    path: '',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
