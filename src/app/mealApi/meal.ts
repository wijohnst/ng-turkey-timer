import { Duration } from "date-fns";

import { Recipe } from "./mealTypes";

export class Meal {
  constructor(
    serviceDate: Date,
    serviceTime: Duration | null,
    recipes: Recipe[] | []
  ) {}
}
