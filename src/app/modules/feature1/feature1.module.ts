import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { Component1Component, Component2Component } from './components';
import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Effects, feature1FeatureKey, reducer } from './store';

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    StoreModule.forFeature(feature1FeatureKey, reducer),
    EffectsModule.forFeature([Feature1Effects]),
    SharedModule,
  ],
})
export class Feature1Module {}
