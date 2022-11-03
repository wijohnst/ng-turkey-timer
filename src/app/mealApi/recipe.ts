export type PrepListEntry = {
  prepCardText: string;
  duration: Duration;
};
export class Recipe {
  name: string;
  leadTime: Duration;
  prepTime: Duration;

  constructor(name: string, leadTime: Duration, prepTime: Duration) {
    this.name = name;
    this.prepTime = prepTime;
    this.leadTime = leadTime;
  }

  initRecipe() {
    this.name = "";
    this.leadTime = {};
    this.prepTime = {};
  }

  public getPrepListEntries(): PrepListEntry[] {
    // If there is no lead time...
    if (Object.keys(this.leadTime).length === 0) {
      return [
        {
          prepCardText: `${this.name} Prep`,
          duration: this.prepTime,
        },
      ];
    } else {
      return [
        {
          prepCardText: `${this.name} Lead`,
          duration: this.leadTime,
        },
        {
          prepCardText: `${this.name} Prep`,
          duration: this.prepTime,
        },
      ];
    }
  }
}
