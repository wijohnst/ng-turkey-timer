import { Component, OnInit } from "@angular/core";

enum ViewNames {
  PREPLIST,
  TIMELINE,
}
@Component({
  selector: "app-track-meal",
  templateUrl: "./track-meal.component.html",
  styleUrls: ["./track-meal.component.css"],
})
export class TrackMealComponent implements OnInit {
  constructor() {}

  viewName: ViewNames = ViewNames.PREPLIST;

  ngOnInit() {}

  toggleView() {
    if (this.viewName === ViewNames.PREPLIST) {
      this.viewName = ViewNames.TIMELINE;
    } else {
      this.viewName = ViewNames.PREPLIST;
    }
  }
}
