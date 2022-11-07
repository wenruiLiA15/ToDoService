import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  
  public BASEURL: string = 'https://localhost:44309/ToDos';
  constructor(private http: HttpClient) { }

  create(todoItem: ToDoItem): Observable<void> {
    return this.http.post<void>(`${this.BASEURL}`, todoItem)
  }
  update(updateTodoItem: ToDoItem): Observable<void> {
    return this.http.put<void>(`${this.BASEURL}`, updateTodoItem)
  }
  getById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.BASEURL}/${id}`)
  }
  
}
