import { Component, OnInit } from '@angular/core';
import { GetJobs } from './../../store/actions/jobs.actions';
import { Store, select } from '@ngrx/store';
import * as $ from 'jquery';
import { IAppState } from '../../store/state/app.state';
import { selectJobList, pager } from '../../store/selectors/job.selector';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs$ = this._store.pipe(select(selectJobList));
  pager$ = this._store.pipe(select(pager))
  currentPage = 0;
  totalItems = 0;
  totalPages = 0;
  constructor(private _store: Store<IAppState>, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this._store.dispatch(new GetJobs(this.currentPage));
    try {
      this.pager$.subscribe(data => {
        if (data) {
          this.currentPage = data.currentPage || 0;
          this.totalItems = data.totalItems;
          this.totalPages = data.totalPages;
          this.spinner.hide();
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  onScrollDown = () => {
    if (this.totalPages !== this.currentPage) {
      this.spinner.show();
      this._store.dispatch(new GetJobs(++this.currentPage));
    }
    setTimeout(() => {
      this.spinner.hide();
    }, 400)
  }

  onUp = () => {
    this.spinner.show();
    this.currentPage = 0;
    this._store.dispatch(new GetJobs(this.currentPage));
    this.jobs$.subscribe(data => {
      if (data.length === 4) {
        this.spinner.hide();
        window.scrollTo(0, 0);
      }
    });
  }

  removeJob = () => {
    return;
  }

  addJob = () => {
    return;
  }

  apply = () => {
    return;
  }
}
