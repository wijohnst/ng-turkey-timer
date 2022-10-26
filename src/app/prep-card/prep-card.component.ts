import { Component, OnInit, Input } from "@angular/core";

export enum PrepCardType {
  COMPLETED,
  CURRENT,
  UPCOMING,
}
@Component({
  selector: "app-prep-card",
  templateUrl: "./prep-card.component.html",
  styleUrls: ["./prep-card.component.css"],
})
export class PrepCardComponent implements OnInit {
  public prepCardEnum = PrepCardType;

  @Input() cardText: string;
  @Input() type: PrepCardType;
  @Input() tooltipText: string;

  constructor() {}

  ngOnInit() {}
}
