import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-year-author",
  templateUrl: "./year-author.component.html",
  styleUrls: ["./year-author.component.css"],
})
export class YearAuthorComponent implements OnInit {
  constructor() {}

  currentYear = new Date().getFullYear();

  ngOnInit() {}
}
