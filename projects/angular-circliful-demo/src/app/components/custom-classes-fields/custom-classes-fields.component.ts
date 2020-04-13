import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-custom-classes-fields',
  templateUrl: './custom-classes-fields.component.html',
})
export class CustomClassesFieldsComponent implements OnInit {
  @Input() customClasses: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
