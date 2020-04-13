import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/getting-started/getting-started.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getting-started', component: GettingStartedComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouting {

}
