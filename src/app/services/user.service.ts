import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';
import { config } from '../common/config';

@Injectable()
export class UserService {
  usersUrl = `${config.apiUrl}users`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.usersUrl);
  }
}