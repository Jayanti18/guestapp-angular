import Guest from '../models/guest.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
// import { GuardsCheckStart } from '@angular/router';

@Injectable()
export class GuestService {

  api_url = 'http://localhost:3000';
  guestUrl = `${this.api_url}/api/guests`;

  constructor(
    private http: HttpClient) { }
 // .....some code 

//Create guest, takes a Guest Object

createGuest(guest: Guest): Observable<any>{
    //returns the observable of http post request 
    let addUrl = `${this.guestUrl}`
    return this.http.post(addUrl, guest);
  }

//Read guest, takes no arguments
getGuests(): Observable<Guest[]>{
    return this.http.get(this.guestUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Guest[];
    }))
  }

//Update todo, takes a ToDo Object as parameter
editGuest(guest:Guest){
    let editUrl = `${this.guestUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, guest);
  }

  // delete funtion
deleteGuest(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.guestUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}