import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photo:String = "https://www.computerhope.com/jargon/t/task.png"
  constructor() { }

  ngOnInit(): void {
  }

}
