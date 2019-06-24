import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {
//create a variable
appName: string="Phone Book App"; //String
year:number = 2019;
skillset:any[] = [
  'html' , 'java' , 'js' , 101 ,102
]
myProfile:{} = {
name : 'Shruti',
exp : 0,
city : 'Kerala'

}
  constructor() { 
  }

  ngOnInit() {
  
  }
add(a , b){
  return a+b;
}
}
