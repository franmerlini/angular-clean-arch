import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component, Component2Component } from './components';

const routes: Routes = [
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule {}
