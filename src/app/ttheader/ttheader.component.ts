import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ttheader",
  templateUrl: "./ttheader.component.html",
  styleUrls: ["./ttheader.component.css"],
})
export class TtheaderComponent implements OnInit {
  constructor() {}

  applicationName = "Turkey Timer";

  ngOnInit() {}
}
