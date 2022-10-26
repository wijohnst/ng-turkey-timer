import { Component, OnInit, OnDestroy } from "@angular/core";
import { PrepCardType } from "../prep-card/prep-card.component";
import { LocalStorageService } from "../local-storage.service";
import { Meal } from "../mealApi/meal";
import { Recipe, PrepListEntry } from "../mealApi/recipe";
import { TimerService } from "../timer.service";
import { Subscription } from "rxjs";
import { convertDurationToMinutes } from "./prep-board.utils";

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
    private timerService: TimerService
  ) {}

  timeToServiceSubscription: Subscription;
  timeToService: Duration = this.timerService.getTimeToService();

  prepList = EmptyPrepList;
  mealData: Meal;

  ngOnInit() {
    this.mealData = this.localStorageService.getLocalMeal();
    this.timeToServiceSubscription = this.timerService
      .getTimerValues()
      .subscribe((timeToService: Duration) => this.getPrepList(timeToService));
  }

  ngOnDestroy(): void {
    if (this.timeToServiceSubscription) {
      this.timeToServiceSubscription.unsubscribe();
    }
  }

  getPrepList(timeToService: Duration) {
    const allPrepListEntries: PrepListEntry[] = this.mealData.recipes.flatMap(
      (recipeData) =>
        new Recipe(
          recipeData.name,
          recipeData.leadTime,
          recipeData.prepTime
        ).getPrepListEntries()
    );

    // Resets local values before updating
    this.prepList.current = [];
    this.prepList.upcoming = [];
    this.prepList.completed = [];

    const minutesToService = convertDurationToMinutes(timeToService);

    allPrepListEntries.forEach((prepListEntry: PrepListEntry) => {
      const minutesToStartRecipe = convertDurationToMinutes(
        prepListEntry.duration
      );
      const startTimeDifference = minutesToService - minutesToStartRecipe;

      if (startTimeDifference <= 0) {
        this.prepList.completed.push(prepListEntry);
        return;
      }
      if (startTimeDifference <= 29) {
        this.prepList.current.push(prepListEntry);
        return;
      } else {
        this.prepList.upcoming.push(prepListEntry);
        return;
      }
    });
  }
}
