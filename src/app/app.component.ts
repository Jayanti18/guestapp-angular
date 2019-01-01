
import { Component, OnInit } from '@angular/core';
import {Response } from '@angular/http';
import { GuestService } from './services/guest.services';
import Guest from './models/guest.models';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
  ){}
  ngOnInit() {

  }

}



