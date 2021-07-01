import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { ServiceHelperService } from './services';

const MODULES = [
  MaterialModule,
  LayoutModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ], exports: [
    ...MODULES
  ],
  providers: [
    {
      provide: "BASE_URL", useFactory: getBaseUrl 
    },
    ServiceHelperService
  ]
})
export class SharedModule { }
export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}