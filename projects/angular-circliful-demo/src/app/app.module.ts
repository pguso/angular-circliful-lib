import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularCirclifulModule} from '../../../angular-circliful/src/lib/angular-circliful.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { CircleEditorComponent } from './components/circle-editor/circle-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomClassesFieldsComponent } from './components/custom-classes-fields/custom-classes-fields.component';
import { PointFieldsComponent } from './components/point-fields/point-fields.component';
import { InfoTextFieldsComponent } from './components/info-text-fields/info-text-fields.component';
import { BackgroundCircleFieldsComponent } from './components/background-circle-fields/background-circle-fields.component';
import { ContainerDimensionsFieldsComponent } from './components/container-dimensions-fields/container-dimensions-fields.component';
import { PercentFieldComponent } from './components/percent-field/percent-field.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import {AppRouting} from './app.routing';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import {MarkdownModule} from 'ngx-markdown';
import {MatTableModule} from '@angular/material/table';
import { OptionsTableComponent } from './components/options-table/options-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleEditorComponent,
    CustomClassesFieldsComponent,
    PointFieldsComponent,
    InfoTextFieldsComponent,
    BackgroundCircleFieldsComponent,
    ContainerDimensionsFieldsComponent,
    PercentFieldComponent,
    HomeComponent,
    GettingStartedComponent,
    OptionsTableComponent,
  ],
  imports: [
    BrowserModule,
    AngularCirclifulModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRouting,
    MarkdownModule.forRoot(),
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
