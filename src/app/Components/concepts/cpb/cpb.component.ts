import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {
  //@input decorator ensures that myAge becomes a property to the parent
  @Input() myAge :number=40;
  constructor() { }

  ngOnInit() {
  }

}
