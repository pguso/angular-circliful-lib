import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-percent-field',
  templateUrl: './percent-field.component.html',
})
export class PercentFieldComponent {
  @Input() circleEditorForm: FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();

  sliderChange(value: boolean | number, type: string): void {
    let patchValue: object;
    switch (type) {
      case 'percent':
        patchValue = {
          percent: {
            ...this.circleEditorForm.get('percent').value,
            value: String(value)
          }
        };
        break;
      case 'noPercentageSign':
        patchValue = {
          percent: {
            ...this.circleEditorForm.get('percent').value,
            noPercentageSign: value
          }
        };
        break;
    }

    if (patchValue) {
      this.circleEditorForm.patchValue(patchValue);
      this.formChange.emit(this.circleEditorForm.value);
    }
  }
}
