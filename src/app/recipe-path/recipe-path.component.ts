import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-path",
  templateUrl: "./recipe-path.component.html",
  styleUrls: ["./recipe-path.component.css"],
})
export class RecipePathComponent implements OnInit {
  @Input() pathText: string;
  @Input() tooltipText: string;
  @Input() tMinusString: string;

  combinedTooltipText: string;

  constructor() {}

  ngOnInit() {
    this.combinedTooltipText = `${this.tooltipText} ${this.tMinusString}`;
  }
}
