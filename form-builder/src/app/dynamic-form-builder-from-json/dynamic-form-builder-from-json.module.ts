import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class DynamicFormBuilderFromJsonModule { }
