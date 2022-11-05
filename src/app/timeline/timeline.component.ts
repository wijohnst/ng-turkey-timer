import { Component, OnInit } from "@angular/core";
import { TimelineService } from "../timeline.service";
import { ForegroundData, RecipePath, TimelineRow } from "./timelineApi";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  constructor(private timelineService: TimelineService) {}

  timelineRows: TimelineRow[];
  foregroundRows: string;
  recipePaths: RecipePath[];
  foregroundStyle: ForegroundData;

  ngOnInit() {
    this.timelineRows = this.timelineService.getTimelineRows();
    this.recipePaths = this.timelineService.getRecipePaths();
    this.foregroundRows = `repeat(${this.timelineRows.length * 2}, 1fr)`;
    this.foregroundStyle = this.timelineService.getForegroundData();
  }
}
