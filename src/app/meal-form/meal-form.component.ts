import { Component, OnInit } from "@angular/core";

import { Meal } from "../mealApi/meal";
import { Recipe } from "../mealApi/recipe";

import { LocalStorageService } from "../local-storage.service";

@Component({
  selector: "app-meal-form",
  templateUrl: "./meal-form.component.html",
  styleUrls: ["./meal-form.component.css"],
})
export class MealFormComponent implements OnInit {
  model = new Meal(new Date("11/24/2022"), "2:30 PM", []);
  recipeModel = new Recipe(
    "",
    this.getEmptyDuration(),
    this.getEmptyDuration()
  );
  shouldShowRecipeInputs: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {}

  addRecipe() {
    const recipeCopy = { ...this.recipeModel };
    this.model.addRecipe(recipeCopy);
    this.initRecipe();
  }

  submitMeal() {
    this.localStorageService.saveLocalMeal(this.model);
  }

  getEmptyDuration() {
    return {
      years: null,
      months: null,
      weeks: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  }

  initRecipe() {
    this.shouldShowRecipeInputs = true;
    this.recipeModel.initRecipe();
  }

  removeRecipe(index: number) {
    const recipes = [...this.model.recipes];
    this.model.recipes = recipes.splice(index + 1, 1);
  }
}
