import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', //take this selector and add it to the app.component.html
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
