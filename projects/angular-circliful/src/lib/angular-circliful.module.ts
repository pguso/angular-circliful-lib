import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AngularCirclifulComponent} from './angular-circliful.component';
import {CommonModule} from '@angular/common';
import { SvgContainerComponent } from './svg-container/svg-container.component';


@NgModule({
  declarations: [
    AngularCirclifulComponent,
    SvgContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [AngularCirclifulComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AngularCirclifulModule {}
