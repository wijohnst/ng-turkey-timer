import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-leaf-timer",
  templateUrl: "./leaf-timer.component.html",
  styleUrls: ["./leaf-timer.component.css"],
})
export class LeafTimerComponent implements OnInit, OnDestroy {
  constructor(private timerService: TimerService) {}

  timeToServiceSubscription: Subscription;
  timeToService: Duration = this.timerService.getTimeToService();

  isLessThanOneMonth: boolean = true;
  // isLessThanOneMonth: boolean = false;
  moreThanOneMonthText: string =
    "Your meal is more than a month away. Relax for now and check back in 12 days.";

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
