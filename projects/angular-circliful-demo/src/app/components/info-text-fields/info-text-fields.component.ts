import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-text-fields',
  templateUrl: './info-text-fields.component.html',
})
export class InfoTextFieldsComponent {
  @Input() text: FormGroup;
}
