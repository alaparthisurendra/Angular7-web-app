import { Component, OnInit } from "@angular/core";
import { IfStmt } from "@angular/compiler";
import { ContactService } from "../../../services/contact.service";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styles: []
})
export class AddContactComponent implements OnInit {
  
  submissionStatus: string;
  constructor(private contactService: ContactService) {}     //connect to service

  ngOnInit() {}

  addContactHandler(formData) {  //Get data from html form
    console.log(formData);
    this.contactService.createContact(formData.value)
    .subscribe(resp => {//get response from service
      console.log("resp", resp);
      //to check status of request
      this.submissionStatus = "Thanks! Contact added";

    });
  

    
  }
}
