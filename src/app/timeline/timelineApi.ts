import { PrepListEntry } from "../mealApi/recipe";

export interface TimelineRow {
  spanText: string;
}

export interface RecipePath {
  pathText: string;
  gridArea: string;
  prepListEntry: PrepListEntry;
}

export type BackgroundRow = {
  size: number;
  unit: "px" | "rem" | "em";
};

export type ForegroundData = {
  height: string;
  top: string;
  "grid-template-columns": string;
  "grid-template-rows": string;
};
