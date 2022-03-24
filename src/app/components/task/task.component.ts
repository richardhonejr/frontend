import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task', //add the selector to show component in XXX
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
