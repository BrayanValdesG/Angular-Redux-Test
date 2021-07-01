import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { ConfigurationServiceService, ServiceHelperService } from './services';
import { ShellComponent } from './components';
import { ShellContainer } from './containers';

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

const CONTAINERS = [
  ShellContainer
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINERS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ], exports: [
    ...CONTAINERS,
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