import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { UserReducers } from './user.reducers';
import { IAppState } from '../state/app.state';
import { JobsReducers } from './jobs.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: UserReducers,
    jobs: JobsReducers
};