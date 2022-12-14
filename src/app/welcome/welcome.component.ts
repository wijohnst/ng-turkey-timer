import { Component, OnInit } from "@angular/core";

import { LocalStorageService } from "../local-storage.service";
import { BreakpointObserverService } from "../breakpoint-observer.service";

import { Meal } from "../mealApi/meal";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  localMeal: Meal | null;
  hasBeenReset: boolean = false;

  ngOnInit() {
    this.localMeal = this.localStorageService.getLocalMeal();
  }

  handleResetClick(): void {
    this.localStorageService.removeLocalMeal();
    this.ngOnInit();
  }
}
