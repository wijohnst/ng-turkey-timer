import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Meal } from "./mealApi/meal";

import { interval, Observable, Subscription } from "rxjs";
import { take, map } from "rxjs/operators";

import { getTime, intervalToDuration } from "date-fns";

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
    const timeValues = interval(1000);
    return timeValues.pipe(map((integer) => this.getTimeToService()));
  }
}
