import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }
  
  getTasks() {
    return this.httpClient.get<ITask[]>('http://localhost:8080/all')
  }
}
