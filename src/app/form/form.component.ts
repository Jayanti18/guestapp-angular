import { Response } from '@angular/http';
import { GuestService } from '../services/guest.services';
import Guest from '../models/guest.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private guestService: GuestService
    ) { }
    //Declaring the new guest Object and initilizing it
    public newGuest: Guest = new Guest()
  
    //An Empty list for the visible guest list
    guestsList: Guest[];
    editGuests: Guest[] = [];

  ngOnInit() {
    //code to clear the form
     this.guestService.getGuests()
      .subscribe(guests => {
        //assign the guestlist property to the proper http response
         this.guestsList = guests
        console.log(guests)
      })
  }

  // create will get excuted to add the new guest when submit button is clicked
  create() {
    console.log(this.newGuest)
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        console.log("guest data from create:", res.data)
        this.newGuest = new Guest()
      })
  }

}
