import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxContentfulModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxContentfulModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}