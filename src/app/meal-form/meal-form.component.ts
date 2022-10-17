import { Component, OnInit } from "@angular/core";

import { Meal } from "../mealApi/meal";
import { Recipe } from "../mealApi/mealTypes";

@Component({
  selector: "app-meal-form",
  templateUrl: "./meal-form.component.html",
  styleUrls: ["./meal-form.component.css"],
})
export class MealFormComponent implements OnInit {
  model = new Meal(new Date("11/24/2022"), "2:30 PM", []);

  constructor() {}

  ngOnInit() {}

  addRecipe() {
    const emptyRecipe: Recipe = {
      name: "",
      leadTime: this.getEmptyDuration(),
      prepTime: this.getEmptyDuration(),
    };
    this.model.addRecipe(emptyRecipe);
  }

  submitMeal() {
    console.log(this.model);
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
}
