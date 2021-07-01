import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell-container',
  template: `<app-shell [isHandset$]="isHandset$"></app-shell>`
})
export class ShellContainer {

  isHandset$: Observable<boolean> = this.breakPointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakPointObserver: BreakpointObserver) { }

}
