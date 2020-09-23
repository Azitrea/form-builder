import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit, OnDestroy {
  parentForm: FormGroup;

  subscription: Subscription;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      id: [''],
      name: [''],
      age: ['']
    });

    this.subscription = this.parentForm.get('id').valueChanges.subscribe(newID => {
      console.log(newID);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
