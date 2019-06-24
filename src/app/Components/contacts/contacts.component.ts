import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
contactsSubscription:Subscription;

  contactList: IContact[];
  constructor(private contactService: ContactService) {
    console.log("1.Inside Constructor");
  }

  ngOnInit() {
    console.log("2.Inside ngOnInIt");
   this.contactsSubscription = this.contactService.getContacts()
      .subscribe((resp: IContact[]) => {
        if (resp && resp.length > 0) {
          this.contactList = resp;
        }
      });
      
  }

ngOnDestroy(){
  //life cycle hooks
  console.log("ngOnDestroy");
  this.contactsSubscription.unsubscribe();
  //clear the interval
}

}

