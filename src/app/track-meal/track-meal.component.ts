import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-track-meal",
  templateUrl: "./track-meal.component.html",
  styleUrls: ["./track-meal.component.css"],
})
export class TrackMealComponent implements OnInit, OnDestroy {
  constructor(private timerService: TimerService) {}

  timeToServiceSubscription: Subscription;
  timeToService: Duration = this.timerService.getTimeToService();

  ngOnInit() {
    this.timeToServiceSubscription = this.timerService
      .getTimerValues()
      .subscribe(
        (timeToService: Duration) => (this.timeToService = timeToService)
      );
  }

  ngOnDestroy() {
    if (this.timeToServiceSubscription) {
      this.timeToServiceSubscription.unsubscribe();
    }
  }
}
