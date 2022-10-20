import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-track-meal",
  templateUrl: "./track-meal.component.html",
  styleUrls: ["./track-meal.component.css"],
})
export class TrackMealComponent implements OnInit {
  constructor(private timerService: TimerService) {}

  timeValue: Subscription;
  data: Duration = this.timerService.getTimeToService();

  ngOnInit() {
    this.timerService
      .getTimerValues()
      .subscribe((timeToService: Duration) => (this.data = timeToService));
  }

  splitDigit(number: number): number[] | void {
    console.log(number);
  }
}
