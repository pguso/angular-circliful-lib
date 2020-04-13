import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-options-table',
  templateUrl: './options-table.component.html',
  styleUrls: ['./options-table.component.scss']
})
export class OptionsTableComponent {
  @Input() columns: [];
  @Input() data: [];
}
