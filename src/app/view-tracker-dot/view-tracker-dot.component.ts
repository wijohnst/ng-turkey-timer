import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-view-tracker-dot",
  templateUrl: "./view-tracker-dot.component.html",
  styleUrls: ["./view-tracker-dot.component.css"],
})
export class ViewTrackerDotComponent implements OnInit {
  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
