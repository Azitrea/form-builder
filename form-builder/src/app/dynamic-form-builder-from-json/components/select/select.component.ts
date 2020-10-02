import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  group: FormGroup;
  field: any;

  constructor() { }

  ngOnInit(): void {
  }

}
