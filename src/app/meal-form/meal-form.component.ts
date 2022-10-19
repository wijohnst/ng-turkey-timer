import { Component, OnInit } from "@angular/core";

import { Meal } from "../mealApi/meal";
import { Recipe } from "../mealApi/recipe";

import { LocalStorageService } from "../local-storage.service";
import { Router } from "@angular/router";

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

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  addRecipe() {
    const recipeCopy = { ...this.recipeModel };
    this.model.addRecipe(recipeCopy);
    this.initRecipe();
  }

  submitMeal() {
    this.localStorageService.saveLocalMeal(this.model);
    this.router.navigateByUrl("/track_meal");
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
