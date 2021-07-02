import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { ConfigurationServiceService, ServiceHelperService } from './services';
import { ShellComponent } from './components';

const MODULES = [
  MaterialModule,
  LayoutModule
];

const SERVICES = [
  ServiceHelperService,
  ConfigurationServiceService
];

const COMPONENTS = [
  ShellComponent
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES
  ], exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  providers: [
    {
      provide: "BASE_URL", useFactory: getBaseUrl
    },
    ...SERVICES
  ]
})
export class SharedModule { }
export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}