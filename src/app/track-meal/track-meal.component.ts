import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TimerService } from "../timer.service";
import { BreakpointObserverService } from "../breakpoint-observer.service";
import { Breakpoints } from "@angular/cdk/layout";
import { LeafConfig } from "../timer-segment/timer-segment.component";

@Component({
  selector: "app-track-meal",
  templateUrl: "./track-meal.component.html",
  styleUrls: ["./track-meal.component.css"],
})
export class TrackMealComponent implements OnInit, OnDestroy {
  constructor(
    private timerService: TimerService,
    private breakpointObserverService: BreakpointObserverService
  ) {}

  timeToServiceSubscription: Subscription;
  timeToService: Duration = this.timerService.getTimeToService();

  // Dynamic Styling
  Breakpoints = Breakpoints;
  breakpointObserverServiceSubscription: Subscription;
  leafConfig: LeafConfig = {
    numberSize: "2rem",
    dynamicWrapperSize: "200px",
  };
  durationStringSize: string = "8rem";

  ngOnInit() {
    this.timeToServiceSubscription = this.timerService
      .getTimerValues()
      .subscribe(
        (timeToService: Duration) => (this.timeToService = timeToService)
      );

    this.breakpointObserverServiceSubscription =
      this.breakpointObserverService.breakpoint$.subscribe(() =>
        this.breakpointChanged()
      );
  }

  ngOnDestroy() {
    if (this.timeToServiceSubscription) {
      this.timeToServiceSubscription.unsubscribe();
    }
    if (this.breakpointObserverServiceSubscription) {
      this.breakpointObserverServiceSubscription.unsubscribe();
    }
  }

  /*
		! Temporary implementation. Update as needed to dynamically render components based on future work.
	*/
  breakpointChanged() {
    console.log("Breakpoint updated...");
    if (
      this.breakpointObserverService.breakpointObserver.isMatched(
        Breakpoints.XSmall
      )
    ) {
      this.leafConfig = {
        numberSize: "1rem",
        dynamicWrapperSize: "10px",
      };
      this.durationStringSize = "1rem";
    } else {
      this.leafConfig = {
        numberSize: "2rem",
        dynamicWrapperSize: "200px",
      };
      this.durationStringSize = "2rem";
    }
  }
}
