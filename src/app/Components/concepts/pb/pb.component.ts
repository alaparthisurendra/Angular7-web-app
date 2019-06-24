import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pb",
  templateUrl: "./pb.component.html",
  styles: [
    `
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    `
  ]
})
export class PbComponent implements OnInit {
  appName: string = "Phone book";
  isLoggedIn: boolean = false;
  constructor() {}

  ngOnInit() {}
  loginHandler() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
