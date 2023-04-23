import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'feature1',
        loadChildren: () => import('./modules/feature1/feature1.module').then((m) => m.Feature1Module),
      },
      {
        path: 'feature2',
        loadChildren: () => import('./modules/feature2/feature2.module').then((m) => m.Feature2Module),
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
