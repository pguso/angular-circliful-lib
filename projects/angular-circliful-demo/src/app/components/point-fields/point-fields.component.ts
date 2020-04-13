import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-point-fields',
  templateUrl: './point-fields.component.html',
})
export class PointFieldsComponent {
  @Input() point: FormGroup;
}
