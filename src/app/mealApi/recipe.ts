export class Recipe {
  name: string;
  leadTime: Duration;
  prepTime: Duration;

  constructor(name: string, leadTime: Duration, prepTime: Duration) {
    this.name = name;
    this.leadTime = leadTime;
    this.prepTime = prepTime;
  }

  initRecipe() {
    this.name = "";
    this.leadTime = {};
    this.prepTime = {};
  }
}
