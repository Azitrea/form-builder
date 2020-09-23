import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildFormComponent } from './components/child-form/child-form.component';



@NgModule({
  declarations: [
    ParentFormComponent,
    ChildFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormGroupHandlerModule { }
