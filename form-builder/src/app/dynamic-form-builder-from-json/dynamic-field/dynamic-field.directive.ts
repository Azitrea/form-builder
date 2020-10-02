import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DateComponent } from '../components/date/date.component';
import { InputComponent } from '../components/input/input.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { SelectComponent } from '../components/select/select.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};
@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() group: FormGroup;
  @Input() field: any;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    }
}
