import { Component, OnInit, Input } from "@angular/core";

enum ButtonDirection {
  LEFT,
  RIGHT,
}
@Component({
  selector: "app-view-nav",
  templateUrl: "./view-nav.component.html",
  styleUrls: ["./view-nav.component.css"],
})
export class ViewNavComponent implements OnInit {
  @Input() buttonDirection: ButtonDirection = ButtonDirection.RIGHT;

  constructor() {}

  ngOnInit() {}
}
