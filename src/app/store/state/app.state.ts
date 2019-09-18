import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IJobsState, initialJobsState } from './job.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    jobs: IJobsState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    jobs: initialJobsState
}

export function getInitialState(): IAppState {
    return initialAppState;
}