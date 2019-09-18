import { IJobs, Job, Pager } from '../../models/jobs.interface';

export interface IJobsState {
    jobs: Job[],
    pager: Pager
    selectedJob: Job
}

export const initialJobsState: IJobsState = {
    jobs: null,
    pager: null,
    selectedJob: null
}