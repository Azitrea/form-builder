import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {
  group: FormGroup;
  field: any;

  constructor() { }

  ngOnInit(): void {
  }

}
