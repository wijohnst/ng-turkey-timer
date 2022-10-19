import { Component, OnInit, Input } from "@angular/core";

type ValuesTuple = [number, number];

enum DurationStrings {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "mins",
}

type LeafConfig = {
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
  @Input() leafConfig: LeafConfig = {
    numberSize: "2rem",
    dynamicWrapperSize: "200px",
  };
  @Input() durationStringSize: string = "2rem";

  ngOnInit() {}
}
