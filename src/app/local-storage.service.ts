import { Injectable } from "@angular/core";
import { Meal } from "./mealApi/meal";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  getLocalMeal() {
    return JSON.parse(localStorage.getItem("meal"));
  }

  saveLocalMeal(meal: Meal) {
    localStorage.setItem("meal", JSON.stringify(meal));
  }

  removeLocalMeal(): void {
    localStorage.removeItem("meal");
  }
}
