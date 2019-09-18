import { createSelector } from "@ngrx/store";

import { IAppState } from '../state/app.state';
import { IJobsState } from '../state/job.state';

const selectJobs = (state: IAppState) => state.jobs;
export const selectJobList = createSelector(
    selectJobs,
    (state: IJobsState) => state.jobs,
);

export const selectSelectedJob = createSelector(
    selectJobs,
    (state: IJobsState) => state.selectedJob
);

export const pager = createSelector(
    selectJobs,
    (state: IJobsState) => state.pager
)