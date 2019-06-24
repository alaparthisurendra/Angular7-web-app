import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/shared/header/header.component";
import { FooterComponent } from "./Components/shared/footer/footer.component";
import { NavComponent } from "./Components/shared/nav/nav.component";
import { SearchComponent } from "./Components/shared/header/search/search.component";
import { ConceptsComponent } from "./Components/concepts/concepts.component";
import { ContactsComponent } from "./Components/contacts/contacts.component";
import { AboutComponent } from "./Components/about/about.component";
import { GetInTouchComponent } from "./Components/get-in-touch/get-in-touch.component";
import { SiComponent } from "./Components/concepts/si/si.component";
import { PbComponent } from "./Components/concepts/pb/pb.component";
import { TbComponent } from "./Components/concepts/tb/tb.component";
import { EbComponent } from "./Components/concepts/eb/eb.component";
import { CpbComponent } from './Components/concepts/cpb/cpb.component';
import { CebComponent } from './Components/concepts/ceb/ceb.component';
import { SdComponent } from './Components/concepts/sd/sd.component';
import { AddContactComponent } from './Components/contacts/add-contact/add-contact.component';
import { AddDetailsComponent } from './Components/contacts/add-details/add-details.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


//Decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    GetInTouchComponent,
    SiComponent,
    PbComponent,
    TbComponent,
    EbComponent,
    CpbComponent,
    CebComponent,
    SdComponent,
    AddContactComponent,
    AddDetailsComponent,
    EllipsisPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
