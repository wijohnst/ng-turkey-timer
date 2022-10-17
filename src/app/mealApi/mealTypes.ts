import { Duration } from "date-fns";
export interface Recipe {
  name: string;
  leadTime: Duration;
  prepTime: Duration;
}
