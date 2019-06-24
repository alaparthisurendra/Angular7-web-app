import { Component } from "@angular/core";
import { AddDetailsComponent } from './Components/contacts/add-details/add-details.component';
import { ContactService } from './services/contact.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-root", //exposed in a selector
  templateUrl: "./app.component.html", //html
  styleUrls: ["./app.component.css"] //css
})
export class AppComponent {
  //ts
  title = "phone-book version 1.1";
}
