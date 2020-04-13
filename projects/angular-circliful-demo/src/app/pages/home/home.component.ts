import {Component} from '@angular/core';
import {ICircle} from '../../../../../angular-circliful/src/lib/interface/icircle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  circleConfig: ICircle;

  constructor() {
    this.circleConfig = {
      percent: {
        value: 65,
        color: '#673ab7'
      },
      color: '#673ab7',
      customClasses: {},
      backgroundCircle: {
        color: '#666',
        strokeWidth: 10
      },
      strokeWidth: 5
    };
  }

  htmlTag: string;

  circleEditorFormChanged(editorForm): void {
    this.circleConfig = editorForm;
    this.htmlTag = `\`\`\`html
    <ac-angular-circliful
      [percent]="${this.getPercent()}"
      color="${editorForm.color}"
      [animate]="${editorForm.animate}"
      strokeLinecap="${editorForm.strokeLinecap}"
      [strokeWidth]="${editorForm.strokeWidth}"
      [animateInView]="${editorForm.animateInView}"`;

    this.getBackgroundCircle();
    this.getGradient();
    this.getProgressColors();
    this.getCustomClasses();
    this.getText();
    this.getPoint();

    this.htmlTag += `></ac-angular-circliful>\n\`\`\`\n`;
  }

  getPercent(): string {
    return `{
        value: ${this.circleConfig.percent.value},
        color: '${this.circleConfig.percent.color}',
        noPercentageSign: ${this.circleConfig.percent.noPercentageSign}
    }`;
  }

  getGradient(): void {
    const {startColor, endColor} = this.circleConfig.gradient;
    if (startColor && endColor) {
      this.htmlTag += `\n[gradient]="{startColor: '${startColor}', endColor: '${endColor}' }"`;
    }
  }

  getProgressColors(): void {
    const {progressColors} = this.circleConfig;
    if (progressColors[0].hasOwnProperty('color') && progressColors[0].color !== '') {
      this.htmlTag += `\n[progressColors]="[`;
      const progressColorsLength = progressColors.length;
      progressColors.forEach((progressColor, i) => {
        if (progressColor.color !== '' && progressColor.percent !== 0) {
          this.htmlTag += `{color: '${progressColor.color}', percent: ${progressColor.percent}}`;
          this.htmlTag += (i > 0 && i !== progressColorsLength ? ',' : '');
        }
      });

      this.htmlTag += `]"`;
    }
  }

  getBackgroundCircle(): void {
    const {color, strokeWidth} = this.circleConfig.backgroundCircle;
    if (color && strokeWidth) {
      this.htmlTag += `\n[backgroundCircle]="{color: '${color}', strokeWidth: ${strokeWidth}}"`;
    }
  }

  getText(): void {
    const {position, x, y, content} = this.circleConfig.text;
    if (position && content) {
      this.htmlTag += `\n[text]="{
        position: '${position}',
        content: '${content}', `;

      if (x) {
        this.htmlTag += `x: ${x}, `;
      }

      if (y) {
        this.htmlTag += `y: ${y} `;
      }

      this.htmlTag += `}"`;
    }
  }

  getPoint(): void {
    const {color, radius} = this.circleConfig.point;
    if (color && radius) {
      this.htmlTag += `\n[point]="{color: '${color}', radius: ${radius} }"`;
    }
  }

  getCustomClasses(): void {
    const {backgroundCircle, foregroundCircle, percent, text, icon, svgContainer, point} = this.circleConfig.customClasses;
    if (backgroundCircle || foregroundCircle || percent || text || icon || svgContainer || point) {
      this.htmlTag += `\n[customClasses]="{`;

      if (backgroundCircle) {
        this.htmlTag += `backgroundCircle: '${backgroundCircle}',`;
      }

      if (foregroundCircle) {
        this.htmlTag += `foregroundCircle: '${foregroundCircle}',`;
      }

      if (percent) {
        this.htmlTag += `percent:' ${percent}',`;
      }

      if (text) {
        this.htmlTag += `text: '${text}',`;
      }

      if (svgContainer) {
        this.htmlTag += `svgContainer: '${svgContainer}',`;
      }

      if (point) {
        this.htmlTag += `point: '${point}'`;
      }

      this.htmlTag += `}"`;
      this.htmlTag.replace(',}', ' }');
    }
  }
}
