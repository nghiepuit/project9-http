import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipe
import { CapitalizePipe } from './pipes/capitalize.pipe';
// Directive
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    CapitalizePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CapitalizePipe,
    HighlightDirective,
    CommonModule
  ]
})
export class SharedModule { }
