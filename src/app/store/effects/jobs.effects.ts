import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetJob, GetJobSuccess, GetJobs, GetJobsSuccess, EJobsActions } from '../actions/jobs.actions';
import { IJobs } from '../../models/jobs.interface';
import { selectJobList } from '../selectors/job.selector';
import { JobsService } from 'src/app/services/jobs.service';

@Injectable()
export class JobsEffects {
    @Effect()
    getJobs$ = this._actions$.pipe(
        ofType<GetJobs>(EJobsActions.GetJobs),
        map(action => action.payload),
        switchMap((page) => {
            return this._jobService.getJobs(page);
        }),
        switchMap((jobs: IJobs) => {
            return of(new GetJobsSuccess(jobs));
        })
    );

    @Effect()
    getJob$ = this._actions$.pipe(
        ofType<GetJob>(EJobsActions.GetJob),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectJobList))),
        switchMap(([id, jobs]) => {
            const selectedJob = jobs.filter((job: { _id: string; }) => {
                return job._id === id;
            })[0];
            return of(new GetJobSuccess(selectedJob));
        })
    );
    constructor(
        private _jobService: JobsService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}