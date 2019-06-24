import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConceptsComponent } from "./Components/concepts/concepts.component";
import { GetInTouchComponent } from "./Components/get-in-touch/get-in-touch.component";
import { ContactsComponent } from "./Components/contacts/contacts.component";
import { AboutComponent } from "./Components/about/about.component";
import { AddContactComponent } from "./Components/contacts/add-contact/add-contact.component";
import { AddDetailsComponent } from "./Components/contacts/add-details/add-details.component";
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  { path: "", component: ConceptsComponent },
  { path: "concepts", component: ConceptsComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "contacts/new", component: AddContactComponent, canActivate:[AuthGuard] ,canDeactivate:[AuthGuard] },
  { path: "contacts/:id", component: AddDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "get-in-touch", component: GetInTouchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //registering route
  exports: [RouterModule]
})
export class AppRoutingModule {}
