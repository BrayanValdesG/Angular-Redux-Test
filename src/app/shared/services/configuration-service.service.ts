import { Injectable } from '@angular/core';
import { Context } from '../models';
import { endPoints } from '../Utils';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationServiceService {

  settings: Context | any;

  constructor() {
    this.settings = {
      ServicesURI: {} as any,
      apiServer: ""
    }
    this.getContext();
   }

  private getContext() {
    this.settings.apiServer = endPoints.apiServer;
    this.settings.ServicesURI = endPoints?.ServicesURI;
  }
}
