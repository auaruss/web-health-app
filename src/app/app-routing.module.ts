import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './components/site/site.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'site/:siteName',
    component: SiteComponent,
    runGuardsAndResolvers: 'paramsChange',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [SiteComponent, ContentComponent];