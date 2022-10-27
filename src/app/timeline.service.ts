import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Meal } from "./mealApi/meal";
import { Recipe } from "./mealApi/recipe";
import { convertDurationToMinutes } from "./prep-board/prep-board.utils";
import { TimelineRow, RecipePath } from "./timeline/timelineApi";
@Injectable({
  providedIn: "root",
})
export class TimelineService {
  constructor(private localStorageService: LocalStorageService) {}

  public meal: Meal = this.localStorageService.getLocalMeal();
  private startTime: Duration = this.getStartTime();

  getStartTime(): Duration {
    const { recipes } = this.meal;
    const startTimeDuration = recipes.reduce<Duration>(
      (startTime: Duration, currentRecipe: Recipe) => {
        const { leadTime, prepTime } = currentRecipe;
        const startTimeMinutes = convertDurationToMinutes(startTime);
        const leadTimeMinutes = convertDurationToMinutes(leadTime);
        const prepTimeMinutes = convertDurationToMinutes(prepTime);

        if (
          leadTimeMinutes > prepTimeMinutes &&
          leadTimeMinutes > startTimeMinutes
        ) {
          return leadTime;
        }

        if (
          prepTimeMinutes > leadTimeMinutes &&
          prepTimeMinutes > startTimeMinutes
        ) {
          return prepTime;
        }

        return startTime;
      },
      {}
    );
    return startTimeDuration;
  }

  public getTimelineRows(): TimelineRow[] {
    const { hours: totalRows } = this.startTime;
    if (totalRows === 0 || !totalRows) {
      return [
        {
          spanText: "T-00:01:00",
        },
        {
          spanText: "TURKEY TIME",
        },
      ];
    }

    return [
      ...Array.from(Array(totalRows).keys())
        .reverse()
        .map((value: number) => {
          // const timelineString =
          //   value + 1 > 9 ? String(value + 1) : `0${String(value + 1)}`;
          const timelineString = String(value + 1).padStart(2, "0");
          return {
            spanText: `T-00:${timelineString}:00`,
          };
        }),
      { spanText: "Turkey Time" },
    ];
  }

  public getRecipePaths(): RecipePath[] | void {
    console.log("Getting Recipe Paths...");
    console.log(this.getPathTextFromRecipeName(this.meal.recipes[0].name));
    // ! NEED ACCESS TO PREP LIST VIA A PREPLIST SERVICE
  }

  getPathTextFromRecipeName(recipeName: string): string {
    return recipeName
      .split(" ")
      .reduce<string>((pathText: string, currentNameString) => {
        return `${pathText}${currentNameString.split("")[0].toUpperCase()}`;
      }, "");
  }
}
