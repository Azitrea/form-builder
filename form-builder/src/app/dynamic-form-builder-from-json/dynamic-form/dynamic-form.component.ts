import { Component, DoCheck, EventEmitter, Input, IterableDiffers, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormUpdateService } from '../service/form-update.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, DoCheck, OnDestroy {
  @Input() fields: any[] = [];
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  private subscription: Subscription;

  private iterableDiffer: any;

  constructor(
    private fb: FormBuilder,
    private iterableDiffers: IterableDiffers,
    private formUpdate: FormUpdateService
    ) {
      this.iterableDiffer = this.iterableDiffers.find([]).create(null);
  }

  ngOnInit(): void {
    this.form = this.createControl();

    this.subscription = this.formUpdate.formUpdateEvent.subscribe(newFormControl => {
      this.addNewFormControl(newFormControl);
    });
  }

  ngDoCheck() {
/*     const changes = this.iterableDiffer.diff(this.fields);

    if (changes) {
      this.form = this.createControl();
    }
 */
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  get value() {
    return this.form.value;
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  addNewFormControl(field) {
    if (field.type === 'button') {
      return;
    }
    const control = this.fb.control(
      field.value,
      this.bindValidations(field.validations || [])
    );
    this.form.addControl(field.name, control);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
