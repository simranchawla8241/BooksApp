import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from './book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private _url="http://skunkworks.ignitesol.com:8000/books/";//API URL

  private search_url="http://skunkworks.ignitesol.com:8000/books?search=";//API URL for search

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) 
  { 

  }

  getBooks():Observable<any>
  {
   //get method returns Observable
    return this.http.get(this._url);
  }
  
  getBooksOnSearch(value:string):Observable<any>
  {
   //get method returns Observable
    return this.http.get(this.search_url+value);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
 

}
