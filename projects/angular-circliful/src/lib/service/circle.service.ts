import {ICalculationParams} from '../interface/icalculation-params';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ICircle} from '../interface/icircle';

@Injectable({
  providedIn: 'root'
})
export class CircleService {
  public circleValues = new BehaviorSubject<ICircle>({percent: {value: 60, color: 'blue'}});

  /**
   * @description For easier handling polar coordinates are used and converted to cartesian coordinates
   * @returns object
   */
  private static polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ): ICalculationParams {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  /**
   * @description Returns the string for the data attribute in the path tag
   * @returns string
   */
  public describeArc(maxSize: number, startAngle: number, endAngle: number): string {
    const x = maxSize / 2;
    const y = maxSize / 2;
    const radius = maxSize / 2.2;
    endAngle = endAngle ? endAngle : 360;
    const start = CircleService.polarToCartesian(x, y, radius, endAngle);
    const end = CircleService.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    let closePath = false;

    if (endAngle === 360 && end.x > start.x) {
      closePath = true;
      start.x = start.x - 0.001;
    }

    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, (closePath ? 'Z' : ''),
    ].join(' ');
  }

  public updateCircleValues(circleValues: ICircle): void {
    this.circleValues.next(circleValues);
  }
}
