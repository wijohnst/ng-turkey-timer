export type PrepListEntry = {
  prepCardText: string;
  duration: Duration;
  tMinusString: string;
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
          tMinusString: this.getTMinusStringFromDuration(this.prepTime),
        },
      ];
    } else {
      return [
        {
          prepCardText: `${this.name} Lead`,
          duration: this.leadTime,
          tMinusString: this.getTMinusStringFromDuration(this.leadTime),
        },
        {
          prepCardText: `${this.name} Prep`,
          duration: this.prepTime,
          tMinusString: this.getTMinusStringFromDuration(this.prepTime),
        },
      ];
    }
  }

  getTMinusStringFromDuration(duration: Duration): string {
    return `T-00:${this.getPaddedNumber(duration.hours)}:${this.getPaddedNumber(
      duration.minutes
    )}
`;
  }

  getPaddedNumber(number: number = 0): string {
    return String(number).padStart(2, "0");
  }
}
