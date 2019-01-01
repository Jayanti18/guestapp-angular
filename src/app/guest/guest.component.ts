import { Response } from '@angular/http';
import { GuestService } from '../services/guest.services';
import Guest from '../models/guest.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(
    //Private guestservice will be injected into the component by Angular Dependency Injector
    private guestService: GuestService
  ) { }

  //Declaring the new guest Object and initilizing it
  public newGuest: Guest = new Guest()

  //An Empty list for the visible guest list
  guestsList: Guest[];
  editGuests: Guest[] = [];


  ngOnInit(): void {

    //At component initialization the 
    this.guestService.getGuests()
      .subscribe(guests => {
        //assign the guestlist property to the proper http response
        this.guestsList = guests
        console.log(guests)
      })
  }
  //This method will get called on Create button event
  
  create() {
    console.log(this.newGuest)
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        console.log("guest data from create:", res.data)
        this.newGuest = new Guest()
      })
  }

  editGuest(guest: Guest) {
    console.log(guest)
     if(this.guestsList.includes(guest)){
      if(!this.editGuests.includes(guest)){
        this.editGuests.push(guest)
      }else{
        this.editGuests.splice(this.editGuests.indexOf(guest), 1)
        this.guestService.editGuest(guest).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editGuest(guest)
            console.error('Update Unsuccesful')
          })
        }
      }
    }
    doneGuest(guest:Guest){
      guest.status = 'Done'
      this.guestService.editGuest(guest).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editGuest(guest)
        console.error('Update Unsuccesful')
      })
    }
    submitGuest(event, guest:Guest){
      if(event.keyCode ==13){
        this.editGuest(guest)
      }
    }
    deleteGuest(guest: Guest) {
      this.guestService.deleteGuest(guest._id).subscribe(res => {
        this.guestsList.splice(this.guestsList.indexOf(guest), 1);
      })
    }  
}