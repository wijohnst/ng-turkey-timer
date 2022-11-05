import { Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { distinctUntilChanged, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BreakpointObserverService {
  constructor(public breakpointObserver: BreakpointObserver) {}
  readonly breakpoint$ = this.breakpointObserver
    .observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ])
    .pipe(
      tap((value) => value),
      distinctUntilChanged()
    );
}
