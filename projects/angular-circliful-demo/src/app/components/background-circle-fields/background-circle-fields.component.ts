import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-background-circle-fields',
  templateUrl: './background-circle-fields.component.html',
})
export class BackgroundCircleFieldsComponent {
  @Input() circleEditorForm: FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();

  public handleBackgroundCircleControls(value: boolean): void {
    const control = this.circleEditorForm.controls.backgroundCircle as FormGroup;
    if (value) {
      control.removeControl('color');
      control.removeControl('strokeWidth');
    } else {
      control.addControl('color', new FormControl('#666'));
      control.addControl('strokeWidth', new FormControl('10', Validators.pattern('^[0-9]*$')));
    }

    this.formChange.emit(this.circleEditorForm.value);
  }
}
