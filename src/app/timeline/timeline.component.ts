import { Component, OnInit } from "@angular/core";
import { TimelineService } from "../timeline.service";
import { RecipePath, TimelineRow } from "./timelineApi";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  constructor(private timelineService: TimelineService) {}

  timelineRows: TimelineRow[];
  recipePaths: RecipePath[];
  // recipePaths: { pathText: string; gridArea: string }[] = [
  //   {
  //     pathText: "TP",
  //     gridArea: "1 / 2 / 20 / 2",
  //   },
  //   {
  //     pathText: "SP",
  //     gridArea: "6 / 3 / 20 / 3",
  //   },
  // ];

  ngOnInit() {
    this.timelineRows = this.timelineService.getTimelineRows();
    this.recipePaths = this.timelineService.getRecipePaths();
  }
}
