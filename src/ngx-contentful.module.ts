import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as contentful from 'contentful';
import { ConfigToken, ContentfulToken } from './tokens';
import { ContentfulConfig } from './models';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class NgxContentfulModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxContentfulModule
    };
  }

}