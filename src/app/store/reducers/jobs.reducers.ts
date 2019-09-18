import { initialJobsState, IJobsState } from '../state/job.state';
import { JobsActions, EJobsActions } from '../actions/jobs.actions';

export const JobsReducers = (state = initialJobsState, action: JobsActions): IJobsState => {
    switch (action.type) {
        case EJobsActions.GetJobsSuccess: {
            console.log(action.payload)
            return action.payload.pager.currentPage === 0
                ? {
                    ...state,
                    pager: action.payload.pager,
                    jobs: action.payload.jobs
                }
                : {
                    ...state,
                    pager: action.payload.pager,
                    jobs: [...state.jobs, ...action.payload.jobs]
                };
        }
        case EJobsActions.GetJobSuccess: {
            return {
                ...state,
                selectedJob: action.payload
            };
        }
        default:
            return state;
    }
};