import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Meal } from "./mealApi/meal";
import { PrepListEntry, Recipe } from "./mealApi/recipe";
import { Recipe as RecipeData } from "./mealApi/mealTypes";
import { convertDurationToMinutes } from "./prep-board/prep-board.utils";
import {
  TimelineRow,
  RecipePath,
  BackgroundRow,
  ForegroundData,
} from "./timeline/timelineApi";
import { PrepositionsArray } from "./constants";
@Injectable({
  providedIn: "root",
})
export class TimelineService {
  constructor(private localStorageService: LocalStorageService) {}

  public meal: Meal = this.localStorageService.getLocalMeal();

  startTime: Duration = this.getStartTime();
  backgroundRow: BackgroundRow = {
    size: 30,
    unit: "px",
  };

  getStartTime(): Duration {
    const { recipes } = this.meal;
    const startTimeDuration = recipes.reduce<Duration>(
      (startTime: Duration, currentRecipe: RecipeData) => {
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
          const timelineString = String(value + 1).padStart(2, "0");
          return {
            spanText: `T-00:${timelineString}:00`,
          };
        }),
      { spanText: "Turkey Time" },
    ];
  }

  public getRecipePaths(): RecipePath[] {
    return this.meal.recipes
      .flatMap((recipe: Recipe) =>
        new Recipe(
          recipe.name,
          recipe.leadTime,
          recipe.prepTime
        ).getPrepListEntries()
      )
      .map((prepListEntry: PrepListEntry, index: number) => ({
        pathText: this.getPathTextFromRecipeName(prepListEntry),
        gridArea: this.getGridArea(prepListEntry, index),
      }));
  }

  getGridArea(prepListEntry: PrepListEntry, prepListIndex: number): string {
    const { duration } = prepListEntry;
    const numberOfRows = this.getTimelineRows().length;
    const foregroundRows = numberOfRows * 2;

    // Adjusts duration to include half hours as part of the `hours` value
    const getTotalHours = (duration: Duration): number => {
      if (!duration.minutes) {
        return duration.hours;
      }

      if (duration.minutes > 29) {
        return duration.hours + 1;
      }

      return duration.hours;
    };

    const totalHours = getTotalHours(duration);

    // Duration is empty object
    if (Object.keys(duration).length === 0) {
      return this.getGridAreaString([
        1,
        prepListIndex + 1,
        foregroundRows,
        prepListIndex + 1,
      ]);
    }

    return this.getGridAreaString([
      foregroundRows - totalHours * 2, // Row Start
      prepListIndex + 1, // Column Start
      foregroundRows, // Row End, aka: T-00:00:00
      prepListIndex + 1, // Column End
    ]);
  }

  getGridAreaString(
    gridAreaCoordinates: [number, number, number, number]
  ): string {
    const [rowStart, columnStart, rowEnd, columnEnd] = gridAreaCoordinates;
    return `${String(rowStart)} / ${String(columnStart)} / ${String(
      rowEnd
    )} / ${String(columnEnd)}`;
  }

  getPathTextFromRecipeName(prepListEntry: PrepListEntry): string {
    // Under four hours, return just the first letter of the PrepListEntry
    if (!prepListEntry.duration.hours || prepListEntry.duration.hours < 4) {
      return prepListEntry.prepCardText.split("")[0];
    }
    // Otherwise, return the first letter of each word, excluding any prepositions
    return prepListEntry.prepCardText
      .split(" ")
      .reduce<string>((pathText: string, currentNameString) => {
        if (PrepositionsArray.includes(currentNameString.toLowerCase())) {
          return pathText;
        }
        return `${pathText}${currentNameString.split("")[0].toUpperCase()}`;
      }, "");
  }

  getForegroundData(): ForegroundData {
    const numberOfRows = this.getTimelineRows().length;
    const computedString = `${numberOfRows * this.backgroundRow.size}${
      this.backgroundRow.unit
    }`;

    return {
      height: computedString,
      top: `-${computedString}`,
      "grid-template-rows": `repeat(${String(numberOfRows * 2)}, 1fr)`,
      "grid-template-columns": `repeat(${String(numberOfRows * 2)}, 1fr)`,
    };
  }
}
