import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leaf-timer",
  templateUrl: "./leaf-timer.component.html",
  styleUrls: ["./leaf-timer.component.css"],
})
export class LeafTimerComponent implements OnInit {
  constructor() {}

  isLessThanOneMonth: boolean = false;
  moreThanOneMonthText: string =
    "Your meal is more than a month away. Relax for now and check back in 12 days.";

  ngOnInit() {}
}
