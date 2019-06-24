import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styles: []
})
export class GetInTouchComponent implements OnInit {
  //create formgroup
  getInTouchForm = new FormGroup({ // 1. create FormGroup
    firstName: new FormControl('', Validators.required), // 2. create new FormControl for form fields
    lastName: new FormControl('', Validators.required), //3. adding validators for the form fields
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),  // 3.1 - added email validators
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]) // 3.2 password validators also added
  });
  
  constructor() { }

  ngOnInit() {
  }
sendInfoHandler(){
  console.log(this.getInTouchForm);
}
}
