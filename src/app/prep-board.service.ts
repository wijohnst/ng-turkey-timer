import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { PrepListEntry } from "./mealApi/recipe";
import { Recipe } from "./mealApi/recipe";
import { convertDurationToMinutes } from "./prep-board/prep-board.utils";

@Injectable({
  providedIn: "root",
})
export class PrepBoardService {
  constructor(private localStorageService: LocalStorageService) {}

  public getPrepList(timeToService: Duration) {
    const prepList = {
      current: [],
      upcoming: [],
      completed: [],
    };
    const mealData = this.localStorageService.getLocalMeal();

    const allPrepListEntries: PrepListEntry[] = mealData.recipes.flatMap(
      (recipeData) =>
        new Recipe(
          recipeData.name,
          recipeData.leadTime,
          recipeData.prepTime
        ).getPrepListEntries()
    );

    const minutesToService = convertDurationToMinutes(timeToService);

    allPrepListEntries.forEach((prepListEntry: PrepListEntry) => {
      const minutesToStartRecipe = convertDurationToMinutes(
        prepListEntry.duration
      );
      const startTimeDifference = minutesToService - minutesToStartRecipe;

      if (startTimeDifference <= 0) {
        prepList.completed.push(prepListEntry);
        return;
      }
      if (startTimeDifference <= 29) {
        prepList.current.push(prepListEntry);
        return;
      } else {
        prepList.upcoming.push(prepListEntry);
        return;
      }
    });

    return prepList;
  }
}
