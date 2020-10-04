import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormUpdateService } from '../service/form-update.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  questionModel: string;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  regConfig: any[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    },
    {
      type: 'input',
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    },
    /*     {
          type: 'radiobutton',
          label: 'Gender',
          name: 'gender',
          options: ['Male', 'Female'],
          value: 'Male'
        }, */
    {
      type: 'date',
      label: 'DOB',
      name: 'dob',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date of Birth Required'
        }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US']
    },
    {
      type: 'checkbox',
      label: 'Accept Terms',
      name: 'term',
      value: true
    },
    {
      type: 'button',
      label: 'Log'
    }
  ];
  constructor(private formUpdate: FormUpdateService) { }

  ngOnInit(): void {
  }

  input() {
    const newCont = {
      type: 'input',
      label: 'Text',
      inputType: 'text',
      question: this.questionModel,
      name: 'name' + (Math.floor(Math.random() * 10000)).toString(),
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    };
    this.regConfig.push(newCont);
    this.formUpdate.formUpdateEvent.next(newCont);
  }

  select() {
    const newCont = {
      type: 'select',
      label: 'Country',
      name: 'asd' + (Math.floor(Math.random() * 10000)).toString(),
      value: 'ASD',
      options: ['ASD', 'VASD', 'LASD']
    };
    this.regConfig.push(newCont);
    this.formUpdate.formUpdateEvent.next(newCont);
  }

  check() {
    const newCont = {
      type: 'checkbox',
      label: 'Yay',
      name: 'meme' + (Math.floor(Math.random() * 10000)).toString(),
      value: false
    };
    this.regConfig.push(newCont);
    this.formUpdate.formUpdateEvent.next(newCont);
  }

  submit(event) {
    console.log('hi', event);
  }

}
