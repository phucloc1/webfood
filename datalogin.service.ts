import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { user } from './app/data';
@Injectable({
  providedIn: 'root'
})
export class DataloginService {
  users="http://localhost:4000/users";
  constructor(
    private _httpClient: HttpClient
  ) { }
  getuser(){
    return this._httpClient.get<user[]>(this.users,{responseType:'json'})
  }
}
