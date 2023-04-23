import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component1Component } from './components';
import { Directive1Directive } from './directives';
import { Pipe1Pipe } from './pipes';

const components = [Component1Component];
const directives = [Directive1Directive];
const pipes = [Pipe1Pipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule],
  exports: [...components, ...directives, ...pipes],
})
export class SharedModule {}
