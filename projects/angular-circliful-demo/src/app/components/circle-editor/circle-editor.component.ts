import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-circle-editor',
  templateUrl: './circle-editor.component.html',
  styleUrls: ['./circle-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CircleEditorComponent {
  circleEditorForm: FormGroup;
  percent: string;

  @Output() formChanged: EventEmitter<object> = new EventEmitter<object>();

  constructor(private formBuilder: FormBuilder) {
    this.circleEditorForm = this.createCircleEditorForm();
  }

  createCircleEditorForm(): FormGroup {
    return this.formBuilder.group({
      percent: this.formBuilder.group({
        value: [65, Validators.pattern('^[0-9]*$')],
        noPercentageSign: [false],
        color: ['#673ab7'],
      }),
      width: [''],
      height: [''],
      color: ['#673ab7'],
      gradient: this.formBuilder.group({
        startColor: [''],
        endColor: ['']
      }),
      strokeWidth: [5, Validators.pattern('^[0-9]*$')],
      strokeLinecap: ['butt'],
      progressColors: this.formBuilder.array([ this.createProgressColors() ]),
      animate: [true],
      animateInView: [false],
      backgroundCircle: this.formBuilder.group({
        color: ['#666'],
        strokeWidth: ['10', Validators.pattern('^[0-9]*$')]
      }),
      text: this.formBuilder.group({
        position: ['middle'],
        x: ['', Validators.pattern('^[0-9-]*$')],
        y: ['', Validators.pattern('^[0-9-]*$')],
        content: [''],
      }),
      point: this.formBuilder.group({
        color: [''],
        radius: ['', Validators.pattern('^[0-9]*$')]
      }),
      customClasses: this.formBuilder.group({
        foregroundCircle: [''],
        backgroundCircle: [''],
        percent: [''],
        text: [''],
        svgContainer: [''],
        point: [''],
      }),
    });
  }

  onCreateCircleEditorFormChange(form): void {
    if (this.circleEditorForm.valid) {
      this.formChanged.emit(form);
    }
  }

  onSliderChange(value: boolean, type: string): void {
    let patchValue: object;
    switch (type) {
      case 'animate':
        patchValue = {
          animate: value
        };
        break;
      case 'animateInView':
        patchValue = {
          animateInView: value
        };
        break;
    }

    if (patchValue) {
      this.circleEditorForm.patchValue(patchValue);
      this.onCreateCircleEditorFormChange(this.circleEditorForm.value);
    }
  }

  get progressColors() {
    return this.circleEditorForm.get('progressColors') as FormArray;
  }

  private createProgressColors(): FormGroup {
    return this.formBuilder.group({
      color: [''],
      percent: ['', Validators.pattern('^[0-9]*$')],
    });
  }

  public addProgressColor(): void {
    this.progressColors.push(this.createProgressColors());
  }

  public removeProgressColor(index: number): void {
    this.progressColors.removeAt(index);
    this.onCreateCircleEditorFormChange(this.circleEditorForm.value);
  }

  public resetForm(): void {
    this.circleEditorForm.reset(this.createCircleEditorForm().value);
    this.onCreateCircleEditorFormChange(this.circleEditorForm.value);
  }
}
