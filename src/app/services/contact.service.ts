import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //create
  createContact(contactData) {//1.get formdata from component
    console.log(contactData);
    //2.send data to rest api
    //2.1.find rest api https://jsonplaceholder.typicode.com/users
    //2.2.send data
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
      .pipe(map((resp) => {//3.get resp from rest api
        console.log(resp);
        return resp;//4.send it back to the component ts
      }));
  }
  getContacts() {
    console.log("inside getContacts()");
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(map((resp) => {//3.get resp from rest api
        console.log(resp);
        return resp;//4.send it back to the component ts
      }));
  }
  getContactById(id) {
    console.log(id);
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
      .pipe(map((resp) => {//3.get resp from rest api
        console.log(resp);
        return resp;//4.send it back to the component ts
      }));
  }
  updatContact(contactData: any){
   return this.http.put("https://jsonplaceholder.typicode.com/users/" + contactData.id,contactData)
   .pipe(map((resp)=>{
     console.log(resp);
     //process this response
     return resp;
   }));
  }
  deleteContact(contactId: any){
    return this.http.delete("https://jsonplaceholder.typicode.com/users/" + contactId)
    .pipe(map((resp)=>{
      console.log(resp);
      //process this response
      return resp;
    }));
   }
}


