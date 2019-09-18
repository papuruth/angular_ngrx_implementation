import { Component, OnInit } from '@angular/core';
import { GetJobs } from './../../store/actions/jobs.actions';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectJobList, pager } from '../../store/selectors/job.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs$ = this._store.pipe(select(selectJobList));
  pager$ = this._store.pipe(select(pager))
  jobs = [];
  currentPage = 0;
  totalItems = 0;
  totalPages = 0;
  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetJobs(0));
    try {
      this.pager$.subscribe(data => {
        if (data) {
          this.currentPage = data.currentPage || 0;
          this.totalItems = data.totalItems;
          this.totalPages = data.totalPages;
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }



  onScrollDown = () => {
    document.getElementById('JobsList').style.opacity = "0.5";
    console.log('scrolled', this.totalPages)
    if (this.totalPages !== this.currentPage) {
      this._store.dispatch(new GetJobs(++this.currentPage));
    }
    setTimeout(() => {
      document.getElementById('JobsList').style.opacity = "1";
    },400)
  }
}
