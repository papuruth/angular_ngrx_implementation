import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IJobs } from '../models/jobs.interface';
import { config } from '../common/config';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobsUrl = `${config.apiUrl}jobs`;
  constructor(
    private _http: HttpClient
  ) { }

  getJobs(page: number): Observable<IJobs> {
    return this._http.get<IJobs>(this.jobsUrl.concat(`?page=${page}`));
  }
}
