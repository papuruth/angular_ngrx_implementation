import { Action } from '@ngrx/store';
import { IJobs, Job } from '../../models/jobs.interface';

export enum EJobsActions {
    GetJobs = '[Job] Get Jobs',
    GetJobsSuccess = '[Job] Get Jobs Success',
    GetJob = '[Job] Get Job',
    GetJobSuccess = '[Job] Get Job Success'
}

export class GetJobs implements Action {
    public readonly type = EJobsActions.GetJobs;
    constructor(public payload: number) { }
}

export class GetJobsSuccess implements Action {
    public readonly type = EJobsActions.GetJobsSuccess;
    constructor(public payload: IJobs) { }
}

export class GetJob implements Action {
    public readonly type = EJobsActions.GetJob;
    constructor(public payload: string) { }
}

export class GetJobSuccess implements Action {
    public readonly type = EJobsActions.GetJobSuccess;
    constructor(public payload: Job) { }
}

export type JobsActions = GetJobs | GetJobsSuccess | GetJob | GetJobSuccess;