import { Component, OnInit, Input } from "@angular/core";

enum LeafTypes {
  ORANGE = "ORANGE",
  RED = "RED",
  GREEN = "GREEN",
}

@Component({
  selector: "app-leaf",
  templateUrl: "./leaf.component.html",
  styleUrls: ["./leaf.component.css"],
})
export class LeafComponent implements OnInit {
  constructor() {}

  @Input() leafType: LeafTypes;
  @Input() rotationDegree: string;

  imagePath: string = "";
  dynamicStyle;

  ngOnInit() {
    this.getImagePath();
    this.getDynamicStyle();
  }

  getImagePath() {
    switch (this.leafType) {
      case LeafTypes.ORANGE:
        this.imagePath = "assets/leaf_y_o.svg";
        break;
      case LeafTypes.GREEN:
        this.imagePath = "assets/leaf_g_y.svg";
        break;
      case LeafTypes.RED:
        this.imagePath = "assets/leaf_r_b.svg";
        break;
      default:
        this.imagePath = "assets/leaf/svg";
        break;
    }
  }

  getDynamicStyle() {
    this.dynamicStyle = { transform: `rotate(${this.rotationDegree}deg)` };
  }
}
