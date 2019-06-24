import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { CebComponent } from '../concepts/ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {
  loggedInUser: string="";
  @ViewChild(CebComponent) cebData;

  constructor() { }

  ngOnInit() {
  }
  onProfileLoadedHandler (msgFromChikd){
    this.loggedInUser= msgFromChikd;
  }
  
  ngAfterViewInit(){
    console.log(this.cebData);
  }


}
