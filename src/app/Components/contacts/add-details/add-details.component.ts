import { Component, OnInit } from "@angular/core";
import { ContactService } from "src/app/services/contact.service";
import { IContact } from "src/app/interfaces/icontact";
import { ActivatedRoute, Params, Router } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-add-details",
  templateUrl: "./add-details.component.html",
  styles: []
})
export class AddDetailsComponent implements OnInit {
  contactId: number;
  contactData: IContact;
  editableContactData: IContact;
  updateStatus: string;
  deleteId: number;
  //router: any;
  deleteStatus: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.contactId = params["id"];
      console.log(this.contactId);
    });
  }

  ngOnInit() {
    this.contactService
      .getContactById(this.contactId)
      .subscribe((resp: IContact) => {
        this.contactData = resp;
      });
  }
  editModalClickHandler() {
    //duplicating object
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
    $("#editModal").modal("show");
  }

  onUpdateHandler() {
    console.log(this.editableContactData);
    //send data to service
    this.contactService
      .updatContact(this.editableContactData)
      .subscribe((resp: IContact) => {
        this.contactData = resp;
        //if..else
        this.updateStatus = "Updated Successfully!";
        setTimeout(() => {
          $("#editModal").modal("hide");
        }, 3000);
      });
  }

  openDeleteModal() {
    $("#deleteModal").modal("show");
  }

  onDeleteHandler(e) {
    console.log(e);
    console.log(this.editableContactData);
    //send data to service
    if (e === "yes") {
      this.contactService
        .deleteContact(this.contactId)
        .subscribe((resp:any) => {
          //if..else
          this.deleteStatus = "Deleted Successfully!";
          //should redirect
          setTimeout(() => {
            this.router.navigateByUrl("/contacts");
            $("#deleteModal").modal("hide");
          }, 3000);
        });
    } else {
      $("#deleteModal").modal("hide");
    }
  }
}
