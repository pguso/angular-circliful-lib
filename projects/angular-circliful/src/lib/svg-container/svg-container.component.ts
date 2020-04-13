import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CircleService} from '../service/circle.service';
import {ChangeDetectorRef} from '@angular/core';
import {StyleService} from '../service/style.service';
import {ISize} from '../interface/isize';
import {ICircle} from '../interface/icircle';

@Component({
  selector: 'ac-svg-container',
  templateUrl: './svg-container.component.html',
  styleUrls: ['./svg-container.component.css']
})
export class SvgContainerComponent implements OnInit {
  @ViewChild('svgContainer') svgContainer: ElementRef;

  public arcData: string;
  public viewBox: string;
  public coordinates = {x: 0, y: 0};
  public radius = 0;
  public backgroundCircleColor = '#333';
  public backgroundCircleWidth = 10;
  public textPosition = 'middle';
  public circleValues: ICircle;

  private size: ISize;

  constructor(
    private circleService: CircleService,
    private changeDetectorRef: ChangeDetectorRef,
    private styleService: StyleService
  ) {
  }

  ngOnInit(): void {
    this.circleService.circleValues.subscribe((circleValues: ICircle) => {
      this.circleValues = circleValues;
      this.size = {
        height: 200,
        maxSize: 200,
        width: 200
      };
      this.updatePercent();
      this.animateCircle();
      this.animateCircleInView();
    });
  }

  updatePercent(): void {
    const percent = this.circleValues.percent.value;
    const endAngle = (this.circleValues.angle?.end ?? 360) / 100 * percent;
    const startAngle = (this.circleValues.angle?.start ?? 0);
    this.viewBox = `0 0 ${this.size.width} ${this.size.height}`;
    this.coordinates = {
      x: this.size.maxSize / 2,
      y: this.size.maxSize / 2,
    };
    this.radius = this.size.maxSize / 2.2;

    this.arcData = this.circleService.describeArc(
      this.size.maxSize,
      startAngle,
      endAngle,
    );
    this.changeDetectorRef.detectChanges();
  }

  animateCircle(): void {
    const pathElements = this.svgContainer.nativeElement.getElementsByTagName('path');
    if (this.circleValues.animate) {
      this.styleService.animateArc({
        arc: pathElements[0],
        arcParams: {
          percent: this.circleValues.percent.value,
          x: this.coordinates.x,
          y: this.coordinates.y,
          radius: this.radius
        },
        maxSize: this.size.maxSize,
        progressColors: this.circleValues.progressColors
      });
    }
  }

  animateCircleInView(): void {
    if (this.circleValues.animateInView) {
      window.addEventListener('scroll', () => {
        this.checkAnimation();
      });
    }
  }

  checkAnimation(): void {
    const circleContainer = this.svgContainer.nativeElement.parentElement;
    const inView = this.styleService.isElementInViewport(circleContainer);

    if (!circleContainer.classList.contains('reanimated') && inView) {
      circleContainer.classList.add('reanimated');
      setTimeout(() => this.animateCircle(), 250);
    }
  }
}
