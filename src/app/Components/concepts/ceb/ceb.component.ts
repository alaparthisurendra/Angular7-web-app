import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-ceb",
  templateUrl: "./ceb.component.html",
  styles: []
})
export class CebComponent implements OnInit {
  //Step 1: creating custom event in the name of profileLoaded
  @Output() profileLoaded = new EventEmitter<string>();

  skills: string[]=['html','css','ng','react','node'];

  constructor() {}

  ngOnInit() {}

  sendDataToParent() {
    //Step2 : emit the custom event
    debugger;
    this.profileLoaded.emit("shruti");
  }
}
