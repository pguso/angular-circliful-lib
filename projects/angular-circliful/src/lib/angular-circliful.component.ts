import {Component, Input, OnChanges} from '@angular/core';
import {IGradient} from './interface/igradient';
import {IElements} from './interface/ielements';
import {IPercent} from './interface/ipercent';
import {IBackgroundCircle} from './interface/ibackground-circle';
import {IText} from './interface/itext';
import {Icon} from './interface/icon';
import {IPoint} from './interface/ipoint';
import {IProgressColor} from './interface/iprogress-color';
import {CircleService} from './service/circle.service';
import {ICircle} from './interface/icircle';

@Component({
  selector: 'ac-angular-circliful',
  templateUrl: './angular-circliful.component.html',
  styles: [
  ],
})
export class AngularCirclifulComponent implements OnChanges {
  @Input() percent: IPercent;
  @Input() color: string;
  @Input() gradient: IGradient;
  @Input() strokeWidth: number;
  @Input() strokeLinecap: string;
  @Input() progressColors: IProgressColor[];
  @Input() animate: boolean;
  @Input() animateInView: boolean;
  @Input() angle: {start: number, end: number};

  @Input() backgroundCircle: IBackgroundCircle;
  @Input() icon: Icon;
  @Input() text: IText;
  @Input() point: IPoint;

  @Input() customClasses: IElements;

  constructor(private circleService: CircleService) { }

  ngOnChanges(): void {
    const customClasses = typeof this.customClasses === 'undefined' ? {} : this.customClasses;
    const circleValues: ICircle =  {
      percent: this.percent,
      color: this.color,
      strokeWidth: this.strokeWidth,
      strokeLinecap: this.strokeLinecap,
      progressColors: this.progressColors,
      animate: this.animate,
      animateInView: this.animateInView,
      backgroundCircle: this.backgroundCircle,
      customClasses,
      angle: this.angle
    };

    if (this.gradient && this.gradient.startColor && this.gradient.endColor) {
      circleValues.gradient = this.gradient;
    }

    if (this.icon && this.icon.iconClass) {
      circleValues.icon = this.icon;
    }

    if (this.text && this.text.content) {
      circleValues.text = this.text;
    }

    if (this.point && this.point.color) {
      circleValues.point = this.point;
    }

    this.circleService.updateCircleValues(circleValues);
  }

}
