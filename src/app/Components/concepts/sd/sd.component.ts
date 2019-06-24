import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  navMenus: Array<string>=[
    'Home','Products','services','about'
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
