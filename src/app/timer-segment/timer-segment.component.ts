import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

type ValuesTuple = [number, number];

enum DurationStrings {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "mins",
}

export type LeafConfig = {
  numberSize: string;
  dynamicWrapperSize: string;
};

@Component({
  selector: "app-timer-segment",
  templateUrl: "./timer-segment.component.html",
  styleUrls: ["./timer-segment.component.css"],
})
export class TimerSegmentComponent implements OnInit {
  constructor() {}

  @Input() values: ValuesTuple = [0, 0];
  @Input() durationString: DurationStrings = DurationStrings.DAYS;

  ngOnInit() {}
}
