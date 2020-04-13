import { Injectable } from '@angular/core';
import {ICalculationParams} from '../interface/icalculation-params';
import {IProgressColor} from '../interface/iprogress-color';
import {CircleService} from './circle.service';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(private circleService: CircleService) { }

  private static getMilliseconds(defaultMs: number, endAngleGrade: number) {
    let ms = defaultMs ? defaultMs : 50;

    if (endAngleGrade <= 180) {
      ms = ms / 3;
    }

    return ms;
  }

  private static setAttributes(element: Element, attributes: {style?: string, d?: string}): void {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  private static removeAttribute(element: Element, attributeName: string): void {
    element.removeAttribute(attributeName);
  }

  /**
   * @description Redraws the arc (circle) border
   */
  public animateArc(
    params: {
      arc: Element,
      arcParams: ICalculationParams,
      maxSize: number,
      progressColors?: IProgressColor[]
    }
  ): void {
    const {arc, arcParams, progressColors} = params;
    const startAngle = 0;
    const endAngleGrade = 360;
    const ms = StyleService.getMilliseconds(arcParams.ms, arcParams.endAngleGrade);
    const hasProgressColor = Array.isArray(progressColors) && progressColors.length > 0;

    StyleService.removeAttribute(arc, 'style');

    let count = 1;
    const interval = setInterval(() => {
      const endAngle = endAngleGrade / 100 * count;
      StyleService.setAttributes(arc, {
        d:  this.circleService.describeArc(params.maxSize, startAngle, endAngle),
      });

      if (hasProgressColor) {
        this.updateCircleColor(count, arc, progressColors);
      }

      count++;

      if (count > arcParams.percent) {
        clearInterval(interval);
      }
    }, ms);
  }

  /**
   * @description If options.progressColors is set, colors are changed on given percentages
   */
  public updateCircleColor(actualCount: number, arc: Element, progressColors: IProgressColor[]) {
    const progressColor = progressColors.find((progress: IProgressColor) => progress.percent === actualCount);
    if (progressColor) {
      StyleService.setAttributes(arc, {
        style: `stroke: ${progressColor.color}`,
      });
    } else if (typeof progressColor !== 'undefined' && progressColor.percent < actualCount) {
      StyleService.removeAttribute(arc, 'style');
    }
  }

  public isElementInViewport(circleContainer: HTMLElement): boolean {
    const offsetTop = circleContainer.offsetTop;
    const scrollPositionTop = window.scrollY;
    const windowHeight = window.innerHeight;

    return scrollPositionTop < offsetTop && scrollPositionTop + windowHeight > offsetTop;
  }
}
