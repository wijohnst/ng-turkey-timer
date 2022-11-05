import { Component, OnInit, OnDestroy } from "@angular/core";
import { PrepCardType } from "../prep-card/prep-card.component";
import { LocalStorageService } from "../local-storage.service";
import { Meal } from "../mealApi/meal";
import { Recipe, PrepListEntry } from "../mealApi/recipe";
import { TimerService } from "../timer.service";
import { Subscription } from "rxjs";
import { convertDurationToMinutes } from "./prep-board.utils";
import { PrepBoardService } from "../prep-board.service";

const EmptyPrepList = {
  current: [],
  upcoming: [],
  completed: [],
};
@Component({
  selector: "app-prep-board",
  templateUrl: "./prep-board.component.html",
  styleUrls: ["./prep-board.component.css"],
})
export class PrepBoardComponent implements OnInit, OnDestroy {
  public prepCardTypes = PrepCardType;
  constructor(
    private localStorageService: LocalStorageService,
    private timerService: TimerService,
    private prepBoardService: PrepBoardService
  ) {}

  timeToServiceSubscription: Subscription;
  timeToService: Duration = this.timerService.getTimeToService();

  prepList = EmptyPrepList;
  mealData: Meal;

  ngOnInit() {
    this.mealData = this.localStorageService.getLocalMeal();
    this.timeToServiceSubscription = this.timerService
      .getTimerValues()
      .subscribe(
        (timeToService: Duration) =>
          (this.prepList = this.prepBoardService.getPrepList(timeToService))
      );
  }

  ngOnDestroy(): void {
    if (this.timeToServiceSubscription) {
      this.timeToServiceSubscription.unsubscribe();
    }
  }
}
