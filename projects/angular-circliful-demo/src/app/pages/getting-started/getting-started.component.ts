import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  tableColumns = ['name', 'default', 'type', 'description'];
  availableOptions = [
    {
      name: 'percent',
      default: '/',
      type: 'object',
      description: 'the percentage of the circle',
    },
    {
      name: 'color',
      default: '#666',
      type: 'string',
      description: 'color foreground circle',
    },
    {
      name: 'gradient',
      default: '/',
      type: 'object',
      description: 'startColor and endColor for gradient of foreground circle',
    },
    {
      name: 'strokeWidth',
      default: '15',
      type: 'number',
      description: 'stroke width of foreground circle',
    },
    {
      name: 'strokeLinecap',
      default: 'butt',
      type: 'string',
      description: 'style of stroke endings',
    },
    {
      name: 'progressColors',
      default: '/',
      type: 'array',
      description: 'holds an array of objects with color and percent, the percent value is the starting point for the color change',
    },
    {
      name: 'animate',
      default: 'true',
      type: 'boolean',
      description: 'animation of the foreground circle',
    },
    {
      name: 'animateInViewport',
      default: 'false',
      type: 'boolean',
      description: 'animation of the foreground circle in viewport',
    },
    {
      name: 'backgroundCircle',
      default: '',
      type: 'object',
      description: 'config for the background circle',
    },
    {
      name: 'text',
      default: '/',
      type: 'object',
      description: 'config for the info text',
    },
    {
      name: 'point',
      default: '/',
      type: 'object',
      description: 'config for a point in the center',
    },
    {
      name: 'customClasses',
      default: '/',
      type: 'object',
      description: 'set custom css classes for each svg child element',
    }
  ];

  gradient = [
    {
      name: 'startColor',
      default: '/',
      type: 'string',
      description: 'gradient start color'
    },
    {
      name: 'endColor',
      default: '/',
      type: 'string',
      description: 'gradient end color'
    }
  ];

  customClasses = [
    {
      name: 'foregroundCircle',
      default: '/',
      type: 'string',
      description: 'custom css class for foreground circle'
    },
    {
      name: 'backgroundCircle',
      default: '/',
      type: 'string',
      description: 'custom css class for background circle'
    },
    {
      name: 'percent',
      default: '/',
      type: 'string',
      description: 'custom css class for percent'
    },
    {
      name: 'text',
      default: '/',
      type: 'string',
      description: 'custom css class for text'
    },
    {
      name: 'svgContainer',
      default: '/',
      type: 'string',
      description: 'custom css class for svg container'
    },
    {
      name: 'point',
      default: '/',
      type: 'string',
      description: 'custom css class for point'
    },
  ];

  percent = [
    {
      name: 'value',
      default: '/',
      type: 'number',
      description: 'percent of foreground circle and displayed text'
    },
    {
      name: 'color',
      default: '/',
      type: 'string',
      description: 'color of percentage text'
    },
    {
      name: 'noPercentageSign',
      default: 'false',
      type: 'boolean',
      description: 'when set to true no percentage sign will be shown'
    },
  ];

  progressColors = [
    {
      name: 'color',
      default: '/',
      type: 'string',
      description: 'color of foreground circle'
    },
    {
      name: 'percent',
      default: '/',
      type: 'number',
      description: 'on this percent the color will change'
    },
  ];

  backgroundCircle = [
    {
      name: 'color',
      default: '/',
      type: 'string',
      description: 'color of background circle'
    },
    {
      name: 'stroke',
      default: '/',
      type: 'strokeWidth',
      description: 'width of stroke'
    },
  ];

  text = [
    {
      name: 'position',
      default: 'middle',
      type: 'string',
      description: 'text position'
    },
    {
      name: 'x',
      default: '/',
      type: 'number',
      description: 'moves the text to the given x position, relative to the outer box'
    },
    {
      name: 'y',
      default: '/',
      type: 'number',
      description: 'moves the text to the given y position, relative to the outer box'
    },
    {
      name: 'content',
      default: '/',
      type: 'string',
      description: 'text to display'
    },
  ];

  point = [
    {
      name: 'color',
      default: '/',
      type: 'string',
      description: 'color of point'
    },
    {
      name: 'radius',
      default: '/',
      type: 'number',
      description: 'radius of the point'
    },
  ];


  htmlTag = `\`\`\`html\n<ac-angular-circliful \n[percent]="percent" \n[color]="color" \n[strokeWidth]="strokeWidth">\n</ac-angular-circliful>\n\`\`\`\n`;

  constructor() { }

  ngOnInit(): void {
  }

}
