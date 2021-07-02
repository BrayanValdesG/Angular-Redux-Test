import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { ConfigurationServiceService, ServiceHelperService } from '@shared/services';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@environments/environment';
import { appReducers, metaReducers } from './app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductResolver } from './product/product.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceHelperService, ConfigurationServiceService, ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
