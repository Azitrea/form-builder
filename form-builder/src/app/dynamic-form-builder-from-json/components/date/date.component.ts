import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  group: FormGroup;
  field: any;

  constructor() { }

  ngOnInit(): void {
  }

}
