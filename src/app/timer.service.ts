import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Meal } from "./mealApi/meal";

import { interval, Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

import { intervalToDuration } from "date-fns";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  constructor(private localStorageService: LocalStorageService) {}

  getTimeToService(): Duration {
    const mealValues = this.localStorageService.getLocalMeal();
    if (mealValues) {
      const meal = new Meal(
        new Date(mealValues.serviceDate),
        mealValues.serviceTime,
        mealValues.recipes
      );
      return intervalToDuration({
        start: new Date(),
        end: meal.getCompleteServiceDate(),
      });
    }
  }

  getTimerValues(): Observable<Duration> {
    // Value is refreshed every 60 seconds...
    const timeValues = timer(0, 60000);
    return timeValues.pipe(map((integer) => this.getTimeToService()));
  }
}
