import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

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
export class TimerSegmentComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() values: ValuesTuple = [0, 0];
  @Input() durationString: DurationStrings = DurationStrings.DAYS;
  @Input() leafConfig: LeafConfig = {
    numberSize: "2rem",
    dynamicWrapperSize: "200px",
  };
  @Input() durationStringSize: string = "1rem";

  durationStringStyle = {
    "font-size": this.durationStringSize,
  };

  localLeafConfig;

  ngOnInit() {
    this.durationStringStyle["font-size"] = this.durationStringSize;
    this.localLeafConfig = this.leafConfig;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.durationStringStyle["font-size"] =
      changes.durationStringSize.currentValue;

    this.localLeafConfig = { ...changes.leafConfig.currentValue };
  }
}
