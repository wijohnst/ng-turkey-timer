import { Component, OnInit, Input } from "@angular/core";

import { LeafTypes } from "../leaf/leaf.component";

@Component({
  selector: "app-number-leaf",
  templateUrl: "./number-leaf.component.html",
  styleUrls: ["./number-leaf.component.css"],
})
export class NumberLeafComponent implements OnInit {
  constructor() {}

  @Input() value: number;
  @Input() numberSize: string = "4em";
  @Input() dynamicWrapperSize = "200px";

  randomLeafType: string;

  ngOnInit() {
    this.getRandomLeafType();
  }

  getRandomLeafType() {
    // Returns a random number between 0 & 2
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        this.randomLeafType = LeafTypes.ORANGE;
        break;
      case 1:
        this.randomLeafType = LeafTypes.GREEN;
        break;
      case 2:
        this.randomLeafType = LeafTypes.RED;
        break;
      default:
        this.randomLeafType = LeafTypes.RED;
        break;
    }
  }
}
