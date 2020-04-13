import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-container-dimensions-fields',
  templateUrl: './container-dimensions-fields.component.html',
})
export class ContainerDimensionsFieldsComponent {
  @Input() width: FormControl;
  @Input() height: FormControl;
}
