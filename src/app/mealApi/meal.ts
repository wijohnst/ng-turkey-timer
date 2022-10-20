import { Duration, format } from "date-fns";

import { Recipe } from "./mealTypes";

export class Meal {
  serviceDate: Date | null;
  serviceTime: string;
  recipes: Recipe[];
  constructor(serviceDate: Date, serviceTime: string, recipes: Recipe[] | []) {
    this.serviceDate = serviceDate;
    this.serviceTime = serviceTime;
    this.recipes = recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getCompleteServiceDate(): Date {
    const formattedServiceTime = format(this.serviceDate, "MM/dd/yyyy");
    const dateString = `${formattedServiceTime} ${this.serviceTime}`;
    return new Date(dateString);
  }
}
