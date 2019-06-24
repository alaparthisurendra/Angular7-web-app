import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
IoremIpsum:string="jahfkasdhggggggggggggggggggggggggggg hg g rthhhhhh trtrtrtrtrtrtrtghnh";
birthday= new Date (2019,3,22);
  constructor() { }

  ngOnInit() {
  }

}
